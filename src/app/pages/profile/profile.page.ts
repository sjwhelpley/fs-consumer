import { Component } from '@angular/core';

import { UserService } from '../../services/users.service';
import { Users } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  currentUser: Users;

  constructor (
    private usersService: UserService ) { 
    this.currentUser = this.usersService.getLoggedInUser();
  }
}
