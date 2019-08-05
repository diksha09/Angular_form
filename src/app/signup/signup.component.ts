import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      phone_no: ['',[Validators.required]],
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      latitude: ['',[Validators.required]],
      longitude: ['',[Validators.required]],
      username: ['',[Validators.required]],
      deviceId: ['',[Validators.required]],
      deviceType: ['',[Validators.required]],
      address: ['',[Validators.required]],

    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.userService.signupUser(this.registerForm.value).subscribe(
      data =>{
        this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      error =>{
        alert(error.error.message);
      }
    );
  }

}
