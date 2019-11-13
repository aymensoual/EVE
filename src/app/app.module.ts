import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Push} from "@ionic-native/push";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AvantnavPage} from "../pages/avantnav/avantnav";
import {NavigationbuyPage} from "../pages/navigationbuy/navigationbuy";
import {Soussejawhara1Page} from "../pages/soussejawhara1/soussejawhara1";
import {Soussejawhara2Page} from "../pages/soussejawhara2/soussejawhara2";
import {Sousseabdlahmid1Page} from "../pages/sousseabdlahmid1/sousseabdlahmid1";
import {Sousseabdlahmid2Page} from "../pages/sousseabdlahmid2/sousseabdlahmid2";

import {Sousseriadh1Page} from "../pages/sousseriadh1/sousseriadh1";
import {Sousseriadh2Page} from "../pages/sousseriadh2/sousseriadh2";

import {Soussemedina1Page} from "../pages/soussemedina1/soussemedina1";
import {Soussemedina2Page} from "../pages/soussemedina2/soussemedina2";





import {AdadnekhibinPage} from "../pages/adadnekhibin/adadnekhibin";
import {Nete2ijsondou9Page} from "../pages/nete2ijsondou9/nete2ijsondou9";




import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database' ;


const firebaseAuth

  = {
  apiKey: "AIzaSyCKMl0k4Gnvg0NS6D2xxzdwVPNrHAl1S2U",
  authDomain: "beledia2-48105.firebaseapp.com",
  databaseURL: "https://beledia2-48105.firebaseio.com",
  projectId: "beledia2-48105",
  storageBucket: "",
  messagingSenderId: "244580898701"
};

@NgModule({
  declarations: [
    MyApp,
    AvantnavPage,
    NavigationbuyPage,
    Soussejawhara1Page,
    Soussejawhara2Page,
    AdadnekhibinPage,
    Nete2ijsondou9Page,
    Sousseabdlahmid1Page,
    Sousseabdlahmid2Page,
    Sousseriadh1Page,
    Sousseriadh2Page,
    Soussemedina1Page,
    Soussemedina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AvantnavPage,
    NavigationbuyPage,
    Soussejawhara1Page,
    Soussejawhara2Page,
    AdadnekhibinPage,
    Nete2ijsondou9Page,
    Sousseabdlahmid1Page,
    Sousseabdlahmid2Page,
    Sousseriadh1Page,
    Sousseriadh2Page,
    Soussemedina1Page,
    Soussemedina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
