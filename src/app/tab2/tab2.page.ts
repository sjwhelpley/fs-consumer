import { Component } from '@angular/core';

import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public items: Array<any> = [];
  email: String;
  public size: number;

  constructor (
    private listingsService: ListingsService
  ) {
    this.items = this.listingsService.getSavedItems();

    this.size = this.items.length;
  }
}