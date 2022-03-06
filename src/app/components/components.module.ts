import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicRatingComponentModule } from 'ionic-rating-component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [FontAwesomeModule, IonicRatingComponentModule]
})
export class ComponentsModule { }
