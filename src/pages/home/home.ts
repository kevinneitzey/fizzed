import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ModePage} from '../mode/mode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modePage = ModePage;

  constructor(public navCtrl: NavController) {

  }

}
