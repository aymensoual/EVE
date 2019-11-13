import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'page-soussemedina2',
  templateUrl: 'soussemedina2.html',
})
export class Soussemedina2Page {


  PaysAlertOpts: { title: string, subTitle: string };
  PaysAlertOpts1: { title: string, subTitle: string };
  PaysAlertOpts2: { title: string, subTitle: string };

  userlist : AngularFireList<any>;




  constructor(public loadingCtrl: LoadingController,public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.userlist = this.fdb.list('/نتائج الصندوق/سوسة المدينة');

    this.PaysAlertOpts1 = {
      title: 'إختر رقم القاعة',
      subTitle: ''
    };

    this.PaysAlertOpts = {
      title: 'إختر إسم المركز',
      subTitle: ''
    };

    this.PaysAlertOpts2 = {
      title: 'إختر رقم الصندوق',
      subTitle: ''
    };

  }


  btnAddClicked1(markez,room,boite,a1){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      سوسةللجميع:a1,
    })}

  btnAddClicked2(markez,room,boite,a2){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      نداءتونس:a2,
    })}

  btnAddClicked3(markez,room,boite,a3){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      حركةالنهضة:a3,
    })}

  btnAddClicked4(markez,room,boite,a4){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      التيارالديمقراطي:a4,
    })}


  btnAddClicked5(markez,room,boite,a5){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      بنىوطني:a5,
    })}


  btnAddClicked6(markez,room,boite,a6){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      سوسةقولiوفعل:a6,
    })}

  btnAddClicked7(markez,room,boite,a7){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      حضرموت:a7,
    })}

  btnAddClicked8(markez,room,boite,a8){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      الجبهةالشعبية:a8,
    })}

  btnAddClicked9(markez,room,boite,a9){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      سواعدسوسة:a9,
    })}

  btnAddClicked10(markez,room,boite,a10){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      كلنالسوسة:a10,
    })}

  btnAddClicked11(markez,room,boite,a11){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      الحزبiالحرالدستوري:a11,
    })}

  btnAddClicked12(markez,room,boite,a12){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      أحرارتونس:a12,
    })}


  btnAddClicked13(markez,room,boite,a13){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      عزالبلاد:a13,
    })}


  btnAddClicked14(markez,room,boite,a14){
    this.userlist.push({
      المركز:markez,
      القاعةرقم:room,
      الصندوق:boite,
      الإقلاع:a14,
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
  a12:number = null;
  a13:number = null;
  a14:number = null;
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
  clearinput12(){this.a12 = null ;}
  clearinput13(){this.a13 = null ;}
  clearinput14(){this.a14 = null ;}
}











