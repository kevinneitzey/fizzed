import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModePage } from '../pages/mode/mode';
import { Pack1Page } from '../pages/pack1/pack1';
import { Pack2Page } from '../pages/pack2/pack2';
import { Pack3Page } from '../pages/pack3/pack3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModePage,
    Pack1Page,
    Pack2Page,
    Pack3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModePage,
    Pack1Page,
    Pack2Page,
    Pack3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
