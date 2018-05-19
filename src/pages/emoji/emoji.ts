import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EmojiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emoji',
  templateUrl: 'emoji.html',
})
export class EmojiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojiPage');
    this.viewCtrl.setBackButtonText('我');
  }

}
