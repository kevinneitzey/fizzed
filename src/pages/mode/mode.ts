import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Pack1Page} from '../pack1/pack1';
import {Pack2Page} from '../pack2/pack2';
import {Pack3Page} from '../pack3/pack3';

@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html',
})
export class ModePage {

  pack1Page = Pack1Page;
  pack2Page = Pack2Page;
  pack3Page = Pack3Page;


  constructor(public navCtrl: NavController) {
  }


}
