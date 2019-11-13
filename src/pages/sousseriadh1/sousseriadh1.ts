import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'page-sousseriadh1',
  templateUrl: 'sousseriadh1.html',
})
export class Sousseriadh1Page {


  PaysAlertOpts: { title: string, subTitle: string };
  PaysAlertOpts1: { title: string, subTitle: string };

  userlist : AngularFireList<any>;




  constructor(public loadingCtrl: LoadingController,public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.userlist = this.fdb.list('/عدد الناخبين/سوسةالرياض');

    this.PaysAlertOpts1 = {
      title: 'إختر رقم القاعة',
      subTitle: ''
    };

    this.PaysAlertOpts = {
      title: 'إختر إسم المركز',
      subTitle: ''
    };

  }


  btnAddClicked1(a1,room,markez){
    this.userlist.push({
      الثامنةالتاسعة:a1,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked2(a2,room,markez){
    this.userlist.push({
      التاسعةالعاشرة:a2,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked3(a3,room,markez){
    this.userlist.push({
      العاشرةالحاديةعشر:a3,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked4(a4,room,markez){
    this.userlist.push({
      الحاديةعشرةالثانيةعشر:a4,
      القاعةرقم:room,
      المركز:markez,
    })}


  btnAddClicked5(a5,room,markez){
    this.userlist.push({
      الثانيةعشرةالثالثةعشرة:a5,
      القاعةرقم:room,
      المركز:markez,
    })}


  btnAddClicked6(a6,room,markez){
    this.userlist.push({
      الثالثةعشرةالرابعةعشرة:a6,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked7(a7,room,markez){
    this.userlist.push({
      الرابعةعشرةالخامسةعشرة:a7,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked8(a8,room,markez){
    this.userlist.push({
      الخامسةعشرةالسادسةعشرة:a8,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked9(a9,room,markez){
    this.userlist.push({
      السادسةعشرةالسابعةعشرة:a9,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked10(a10,room,markez){
    this.userlist.push({
      السابعةعشرةالثامنةعشرة:a10,
      القاعةرقم:room,
      المركز:markez,
    })}

  btnAddClicked11(a11,room,markez){
    this.userlist.push({
      الثامنةعشرةالتاسعةعشرة:a11,
      القاعةرقم:room,
      المركز:markez,
    })}


  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'شكرا',
      message: 'تم الإرسال بنجاح',
      buttons: ['Ok']
    });
    alert.present()
  }
  a1:number  = null;
  a2:number = null;
  a3:number = null;
  a4:number = null;
  a5:number = null;
  a6:number = null;
  a7:number = null;
  a8:number = null;
  a9:number = null;
  a10:number = null;
  a11:number = null;
  clearinput1() {this.a1 = null ;}
  clearinput2() {this.a2 = null ;}
  clearinput3() {this.a3 = null ;}
  clearinput4() {this.a4 = null ;}
  clearinput5() {this.a5 = null ;}
  clearinput6() {this.a6 = null ;}
  clearinput7() {this.a7 = null ;}
  clearinput8() {this.a8 = null ;}
  clearinput9() {this.a9 = null ;}
  clearinput10(){this.a10 = null ;}
  clearinput11(){this.a11 = null ;}
}











