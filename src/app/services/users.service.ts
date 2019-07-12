import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser: Users;

  email: String;
  password: String;

  constructor(
    private http: HttpClient ) { }

  login() {
      return new Promise((resolve, reject) => {
        this.http.post('http://localhost:5000/api/auth/login', [this.email, this.password]).subscribe((response) => {
          resolve(response);
        });
      });
      /* const user: any = this.users.filter(dbUser => {
        return dbUser.email === Authuser.email;
      });

      if (user.length) {
        if (Authuser.password === user[0].password) {
          this.setLoggedInUser(user[0]);
          resolve(user[0]);
        } else {
          reject(new Error('Incorrect password'));
        }
      } else {
        reject(new Error("User doesn't exist"));
      } */
  }

  setLoggedInUser(user: Users) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): Users {
    return this.loggedInUser;
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/users/').subscribe((response) => {
        resolve(response);
      });
    });
  }

  createUser(newUser: Users) {
    if(this.validateEmail(newUser.email)) {
      return new Promise((resolve, reject) => {
        this.http.post('http://localhost:5000/api/users/', JSON.stringify(newUser)).subscribe((response) => {
          resolve(response);
        });
      });
    } else {
      alert("Email already in use!");
    }
  }

  validateEmail(email: String) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/auth/validate', JSON.stringify(email)).subscribe((response) => {
        resolve(response);
      });
    });
  }
}