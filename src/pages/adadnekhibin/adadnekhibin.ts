import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Soussejawhara1Page} from "../soussejawhara1/soussejawhara1";
import {Soussemedina1Page} from "../soussemedina1/soussemedina1";
import {Sousseriadh1Page} from "../sousseriadh1/sousseriadh1";
import {Sousseabdlahmid1Page} from "../sousseabdlahmid1/sousseabdlahmid1";


@Component({
  selector: 'page-adadnekhibin',
  templateUrl: 'adadnekhibin.html',
})
export class AdadnekhibinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gosoussejawhara1(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussejawhara1Page);
  }

  gosoussemedina1(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussemedina1Page);
  }



  gosousseriadh1(params) {
    if (!params) params = {};
    this.navCtrl.push(Sousseriadh1Page);
  }



  gosoussesidiabdlahmid1(params) {
    if (!params) params = {};
    this.navCtrl.push(Sousseabdlahmid1Page);
  }



}
