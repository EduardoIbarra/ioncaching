import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PlacesService} from "../../services/places.service";
import {LoginPage} from "../login/login";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  private places:any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public placesService: PlacesService,
              public modalCtrl: ModalController) {
    this.placesService.getPlaces().valueChanges()
      .subscribe((places)=>{
        this.places = places;
        console.log(this.places);
        this.presentModal();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  presentModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
