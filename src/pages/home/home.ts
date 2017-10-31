import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {ModePage} from '../mode/mode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modePage = ModePage;

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  players = {
    player1: '%',
    player2: '',
    player3: '',
    player4: ''
  }
  logForm() {
    console.log(this.players);
    this.navCtrl.push(ModePage);
  }

  setData(){
    console.log("set data");
    this.storage.set('name', 'Max');

  }

  getData(){
    this.storage.get('name').then((data) => {
      console.log(data);
    });
  }



}
