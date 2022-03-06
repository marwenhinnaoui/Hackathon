import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailPageRoutingModule } from './profile-detail-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileDetailPage } from './profile-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDetailPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ProfileDetailPage]
})
export class ProfileDetailPageModule {}
