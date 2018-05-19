import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { EnsurePage } from '../ensure/ensure';
import { CountryCodePage } from '../country-code/country-code';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    phone:string = "15280083437";

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    close(){
        this.viewCtrl.dismiss();
    }

    login(){
        this.alertCtrl.create({
            title: '服务暂停',
            message: '尊敬的用户，近期由于平台整顿中,暂停服务,给您带来不便,致以诚挚的歉意, 感谢您的支持, 服务恢复时间请关注官方公告，微信，微博！',
            buttons: ['确定']
        }).present();
    }

    code(){
        this.navCtrl.push(CountryCodePage)
    }

    next(){
        this.navCtrl.push(EnsurePage, {
            phone: this.phone
        })
    }

}
