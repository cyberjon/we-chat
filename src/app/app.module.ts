import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WeChatApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagesModule } from '../pages/pages.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        WeChatApp
    ],
    imports: [
        PagesModule,
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(WeChatApp, {
            tabsHideOnSubPages: 'true',
            mode: 'ios',
            backButtonText: '',
            backButtonIcon: 'md-arrow-back'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        WeChatApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule { }
