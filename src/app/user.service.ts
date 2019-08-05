import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signupUser(formData) {
    return this.http.post("http://127.0.0.1:8000/signup", formData);
  }
}
