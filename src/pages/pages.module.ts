import { NgModule } from "@angular/core";
import { HomePage } from "./home/home";
import { HomePageModule } from "./home/home.module";
import { ContactsPageModule } from "./contacts/contacts.module";
import { DiscoveryPageModule } from "./discovery/discovery.module";
import { MyPageModule } from "./my/my.module";
import { BasePageModule } from "./base/base.module";
import { LoginPageModule } from "./login/login.module";
import { SettingPageModule } from "./setting/setting.module";
import { WalletPageModule } from "./wallet/wallet.module";
import { EmojiPageModule } from "./emoji/emoji.module";
import { CardPackagePageModule } from "./card-package/card-package.module";
import { PhotoAlbumPageModule } from "./photo-album/photo-album.module";
import { FavoritePageModule } from "./favorite/favorite.module";
import { ProfilePageModule } from "./profile/profile.module";
import { LoaderPageModule } from "./loader/loader.module";
import { RegisterPageModule } from "./register/register.module";
import { LanguagePageModule } from "./language/language.module";
import { EnsurePageModule } from "./ensure/ensure.module";
import { CountryCodePageModule } from "./country-code/country-code.module";

@NgModule({
    imports: [
        LoaderPageModule,
        LanguagePageModule,
        LoginPageModule,
        CountryCodePageModule,
        EnsurePageModule,
        RegisterPageModule,
        BasePageModule,
        HomePageModule,
        ContactsPageModule,
        DiscoveryPageModule,
        MyPageModule,
        SettingPageModule,
        WalletPageModule,
        EmojiPageModule,
        CardPackagePageModule,
        PhotoAlbumPageModule,
        FavoritePageModule,
        ProfilePageModule
    ]
})

export class PagesModule { }
