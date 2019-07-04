import { Injectable } from '@angular/core';

import { Users } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<Users>;
  loggedInUser: Users;

  user1: Users = new Users("john@mail.com", "123", "John", "Doe");
  user2: Users = new Users("sam@mail.com", "123", "Samantha", "Right");
  user3: Users = new Users("julia@mail.com", "123", "Julia", "Richards");


  constructor() {
    this.users = [
      this.user1,
      this.user2,
      this.user3
    ];
  }

  public logIn(Authuser: Users) {

    return new Promise((resolve, reject) => {

      // Please note that this will call the API noce we have created it - But for now:
      const user: any = this.users.filter(dbUser => {
        return dbUser.email === Authuser.email;
      });

      // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
      if (user.length) {
        if (Authuser.password === user[0].password) {
          this.setLoggedInUser(user[0]);
          resolve(user[0]);
        } else {
          reject(new Error('Incorrect password'));
        }
      } else {
        reject(new Error("User doesn't exist"));
      }
    });
  }

  setLoggedInUser(user: Users) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): Users {
    return this.loggedInUser;
  }
}