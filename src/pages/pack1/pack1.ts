import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-pack1',
  templateUrl: 'pack1.html',
})
export class Pack1Page {

  constructor(public navCtrl: NavController) {

    // disply the card in landscape mode
    // commented out because was causing user to be stuck in landscape mode and could not switch out
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

  }

  //console.log(this.screenOrientation.type);



}
