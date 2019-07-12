import { Component } from '@angular/core';

import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  public listings: any;

  constructor (private listingsService: ListingsService ) {
    this.listings = this.listingsService.getAll();
  }
}
