import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoAlbumPage } from './photo-album';

@NgModule({
  declarations: [
    PhotoAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoAlbumPage),
  ],
})
export class PhotoAlbumPageModule {}
