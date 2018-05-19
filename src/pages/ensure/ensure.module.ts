import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnsurePage } from './ensure';

@NgModule({
  declarations: [
    EnsurePage,
  ],
  imports: [
    IonicPageModule.forChild(EnsurePage),
  ],
})
export class EnsurePageModule {}
