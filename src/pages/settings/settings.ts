import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import * as firebase from 'firebase/app';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private user:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService) {
    console.log(firebase.auth().currentUser);
    this.user = firebase.auth().currentUser;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logout(){
    this.authService.logout().then((response)=>{
      console.log(response);
    });
  }
}
