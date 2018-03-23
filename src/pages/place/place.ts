import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.service";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  private place:any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public placesService: PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }
  savePlace(){
    this.place.id = Date.now();
    this.placesService.createPlace(this.place).then((p)=>{
      this.place = {};
    });
  }

}
