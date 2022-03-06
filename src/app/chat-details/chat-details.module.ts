import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetailsPageRoutingModule } from './chat-details-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChatDetailsPage } from './chat-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDetailsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [ChatDetailsPage]
})
export class ChatDetailsPageModule {}
