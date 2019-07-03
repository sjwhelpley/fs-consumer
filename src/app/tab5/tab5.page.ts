import { Component } from '@angular/core';

import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  public profile: User;

  constructor (
    private usersService: UsersService
  ) { 
    //this.profile = this.usersService.getProfile();
  }
}
