import { Injectable } from '@angular/core';

import { Listing } from '../models/listings'

@Injectable({
  providedIn: 'root'
})
export class ListingsService { 
  allListings: Array<Listing>;
  savedListings: Array<Listing>;

  listing1 = new Listing();
  listing2 = new Listing();

  constructor() {
    this.listing1.name = 'Home in Cape Town';
    this.listing1.location = 'Camps Bay';
    this.listing1.price = 1500;

    this.listing2.name = 'Home in Cape Town';
    this.listing2.location = 'Camps Bay';
    this.listing2.price = 1500;

    this.allListings = [this.listing1, this.listing2];
    this.savedListings = [this.listing1, this.listing2];
  }

  getAllItems() {
    return this.allListings;   
  }

  getSavedItems() {
    return this.savedListings;   
  }
}
