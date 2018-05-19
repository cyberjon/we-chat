import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BasePage } from '../base/base';

/**
 * Generated class for the EnsurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-ensure',
    templateUrl: 'ensure.html',
})
export class EnsurePage {

    type: number = 0;
    phone: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.phone = navParams.get('phone');
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('');
    }

    toggle(){
        this.type = Math.abs(this.type - 1);
    }

    submit(){
        // 这里进行登录
        this.navCtrl.setRoot(BasePage)
    }
}
