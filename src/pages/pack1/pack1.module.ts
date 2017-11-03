import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pack1Page } from './pack1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    Pack1Page,
  ],
  imports: [
    IonicPageModule.forChild(Pack1Page),
  ],
})
export class Pack1PageModule {}
