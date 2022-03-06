/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import { NavController } from '@ionic/angular';
import { MessagesServiceService } from '../services/messages-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  faUser=faUser;
  faTag=faTag;

  categories: any = [
    {
      id: 0,
      category: 'Coding',
      icon:'../../assets/Coding.jpg'
    },
    {
      id: 1,
      category: 'Ui/Ux',
      icon:'../../assets/Ux.jpg'
    },
    {
      id: 2,
      category: 'Translate',
      icon:'../../assets/Translate.jpg'
    },
  ];

  topUsers: any =[];

  constructor(private navCtrl: NavController, private users: MessagesServiceService) {}

  ngOnInit() {
    this.topUsers= this.users.getUser();
  }

  details(id: number){
    this.navCtrl.navigateForward('/profile-detail/'+id);
  }
}
