import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the LanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-language',
    templateUrl: 'language.html',
})
export class LanguagePage {
    
    langForm;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.langForm = new FormGroup({
            "langs": new FormControl({ value: 'auto', disabled: false })
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LanguagePage');
    }

    get langs (){
        return this.langForm.get('langs')
    }

    save() {
        console.log(this.langForm.value);
        this.viewCtrl.dismiss();
    }
}
