import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
// @ts-ignore
import {FirebaseListObservable} from 'angularfire2/database';
import {Soussejawhara1Page} from "../soussejawhara1/soussejawhara1";
import {Soussejawhara2Page} from "../soussejawhara2/soussejawhara2";


@Component({
  selector: 'page-navigationbuy',
  templateUrl: 'navigationbuy.html',
})
export class NavigationbuyPage {



  itemlist : FirebaseListObservable<any>;



  constructor(public loadingCtrl: LoadingController,public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {



  }



  goAdadnekhibinPage(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussejawhara1Page);
  }

  goNete2ijsondou9Page(params) {
    if (!params) params = {};
    this.navCtrl.push(Soussejawhara2Page);
  }


}
