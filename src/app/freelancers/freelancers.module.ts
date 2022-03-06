import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { FreelancersPageRoutingModule } from './freelancers-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FreelancersPage } from './freelancers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreelancersPageRoutingModule,
    FontAwesomeModule,
    ComponentsModule
  ],
  declarations: [FreelancersPage]
})
export class FreelancersPageModule {}
