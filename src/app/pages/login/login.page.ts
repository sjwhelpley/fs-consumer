import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string;
  password: string;

  public users: any;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private usersService: UserService
  ) { }

  login() {
    const authUser = null;
    this.usersService.logIn(authUser).then(user => {
      this.navCtrl.navigateForward('tabs', user);
    }).catch(err => {
      this.presentAlert(err);
    });
    /* 
      this.http.post('http://localhost:5000/api/auth/login', this).subscribe((response) => {
      console.log(response);
    });
    */
  }

  register() {
    this.navCtrl.navigateForward('register');
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