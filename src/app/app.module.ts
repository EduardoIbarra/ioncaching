import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {FeedPage} from "../pages/feed/feed";
import {PlacePage} from "../pages/place/place";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {PlacesService} from "../services/places.service";
import {SettingsPage} from "../pages/settings/settings";
import {LoginPage} from "../pages/login/login";
import {AuthService} from "../services/auth.service";

export const firebaseConfig = {
  apiKey: "AIzaSyBKX0YmmU6ybw5jqXh4qIBWJ2uoZgZXCl8",
  authDomain: "ioncaching.firebaseapp.com",
  databaseURL: "https://ioncaching.firebaseio.com",
  projectId: "ioncaching",
  storageBucket: "ioncaching.appspot.com",
  messagingSenderId: "1071640340819"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    PlacePage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    PlacePage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    AuthService
  ]
})
export class AppModule {}
