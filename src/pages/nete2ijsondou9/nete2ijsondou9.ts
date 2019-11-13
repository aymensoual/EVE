import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Soussejawhara2Page} from "../soussejawhara2/soussejawhara2";
import {Soussemedina2Page} from "../soussemedina2/soussemedina2";
import {Sousseriadh2Page} from "../sousseriadh2/sousseriadh2";
import {Sousseabdlahmid2Page} from "../sousseabdlahmid2/sousseabdlahmid2";


@Component({
  selector: 'page-nete2ijsondou9',
  templateUrl: 'nete2ijsondou9.html',
})
export class Nete2ijsondou9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gosoussejawhara2(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussejawhara2Page);
  }

  gosoussemedina2(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussemedina2Page);
  }



  gosousseriadh2(params) {
    if (!params) params = {};
    this.navCtrl.push(Sousseriadh2Page);
  }



  gosoussesidiabdlahmid2(params) {
    if (!params) params = {};
    this.navCtrl.push(Sousseabdlahmid2Page);
  }



}
