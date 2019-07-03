import { Component } from '@angular/core';

import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public items: Array<any> = [];

  constructor (
    private listingsService: ListingsService
  ) {
    this.items = this.listingsService.getAllItems();
  }
}
