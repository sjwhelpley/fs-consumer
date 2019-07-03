import { Injectable } from '@angular/core';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  profile = new User();

  constructor() {
    this.profile.name = "Jane Doe";
    this.profile.email = "doe@gmail.com";
    this.profile.phone = 123456789;
    this.profile.location = "Cape Town, South Africa";
    this.profile.numReviews = 1;
    this.profile.reviews = [
      {
        name: "Josh",
        review: "Great home."
      }
    ];
  }

  getProfile() {
    return this.profile;
  }
}
