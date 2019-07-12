import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from "../../services/users.service";
import { Users } from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  firstName: String;
  lastName: String;
  cellPhone: String;
  email: String;
  password: String;

  constructor( 
    private navCtrl: NavController,
    private userService: UserService ) { }

  register() {
    let newUser = new Users(this.firstName, this.lastName, this.cellPhone, this.email, this.password);
    this.userService.createUser(newUser);
    this.navCtrl.navigateForward('tabs');
  }
}
