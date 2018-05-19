import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LanguagePage } from '../language/language';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LoaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-loader',
    templateUrl: 'loader.html',
})
export class LoaderPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoaderPage');
    }

    login(){
        console.log('弹出登录窗')
        this.modalCtrl.create(LoginPage).present();
    }

    register(){
        this.navCtrl.push(RegisterPage)
    }

    language(){
        this.navCtrl.push(LanguagePage);
    }
}
