import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { UserService } from '../../services/users.service';
import { Users } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  users: Array<Users>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private usersService: UserService
  ) {

  }

  ngOnInit() {
  }

  login() {
    const authUser = new Users(this.email, this.password);
    this.usersService.logIn(authUser).then(user => {
      this.navCtrl.navigateForward('tabs', user);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  register() {
    alert("Feature coming soon!")
    // This should navigate to the register page:
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}