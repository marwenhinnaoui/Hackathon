import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfilPage } from './profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
