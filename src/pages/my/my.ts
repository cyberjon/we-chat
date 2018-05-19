import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { WalletPage } from '../wallet/wallet';
import { EmojiPage } from '../emoji/emoji';
import { CardPackagePage } from '../card-package/card-package';
import { PhotoAlbumPage } from '../photo-album/photo-album';
import { FavoritePage } from '../favorite/favorite';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-my',
    templateUrl: 'my.html',
})
export class MyPage {

    user = {
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526711179372&di=908e0027e491a1b72388f00b43e35ca5&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2017%2F12%2F30%2F1514603717_LLVcroMk.jpg',
        name: 'mengkeys',
        code: 'zhaomaoxin003',
        qrcode: '',
    }
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyPage');
    }

    setting(){
        this.navCtrl.push(SettingPage);
    }

    wallet(){
        this.navCtrl.push(WalletPage)
    }

    emoji(){
        this.navCtrl.push(EmojiPage)
    }

    cardPackage(){
        this.navCtrl.push(CardPackagePage)
    }

    photoAlbum(){
        this.navCtrl.push(PhotoAlbumPage)
    }

    favorite(){
        this.navCtrl.push(FavoritePage)
    }

    profile(){
        this.navCtrl.push(ProfilePage);
    }
}
