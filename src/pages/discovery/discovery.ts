import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-discovery',
    templateUrl: 'discovery.html',
})
export class DiscoveryPage {

    active = {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526711179372&di=908e0027e491a1b72388f00b43e35ca5&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2017%2F12%2F30%2F1514603717_LLVcroMk.jpg',
    }
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DiscoveryPage');
    }

}
