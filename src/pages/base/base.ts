import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactsPage } from '../contacts/contacts';
import { DiscoveryPage } from '../discovery/discovery';
import { MyPage } from '../my/my';

/**
 * Generated class for the BasePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-base',
    templateUrl: 'base.html'
})
export class BasePage {

    tabHome: any;
    tabDiscovery: any;
    tabContacts: any;
    tabMy: any

    constructor(public navCtrl: NavController) {
        this.tabHome = HomePage;
        this.tabContacts = ContactsPage;
        this.tabDiscovery = DiscoveryPage;
        this.tabMy = MyPage;
    }

}
