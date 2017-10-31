import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-pack2',
  templateUrl: 'pack2.html',
})
export class Pack2Page {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pack2Page');
  }

}
