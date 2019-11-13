import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NavigationbuyPage} from "../navigationbuy/navigationbuy";


@Component({
  selector: 'page-avantnav',
  templateUrl: 'avantnav.html',
})
export class AvantnavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  goLoggedinPage(params) {
    if (!params) params = {};
    this.navCtrl.push(NavigationbuyPage);
  }

}
