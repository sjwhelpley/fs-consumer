import { Injectable } from '@angular/core';

import { User } from '../models/user'
import { Reviews } from '../models/reviews';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  profile = new User();
  review1 = new Reviews();
  review2 = new Reviews();

  constructor() {
    this.profile.name = "Jane Doe";
    this.profile.email = "doe@gmail.com";
    this.profile.phone = 123456789;
    this.profile.location = "Cape Town, South Africa";
    this.profile.numReviews = 2;
    
    this.review1.name = "Josh";
    this.review1.review = "Nice home.";
    this.review2.name = "Jane";
    this.review2.review = "Great home.";
    this.profile.reviews = [this.review1, this.review2];
  }

  getProfile() {
    return this.profile;
  }
}
