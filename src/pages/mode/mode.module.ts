import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ModePage } from './mode';
import {Pack1Page} from '../pack1/pack1';
import {Pack2Page} from '../pack2/pack2';
import {Pack3Page} from '../pack3/pack3';

@NgModule({
  declarations: [
    ModePage,
    Pack1Page,
    Pack2Page,
    Pack3Page
  ],
  imports: [
    IonicPageModule.forChild(ModePage),
  ],
})


export class ModePageModule {}
