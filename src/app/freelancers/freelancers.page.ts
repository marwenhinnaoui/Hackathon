/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { faSliders, faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import { NavController } from '@ionic/angular';
import { MessagesServiceService } from '../services/messages-service.service';
@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.page.html',
  styleUrls: ['./freelancers.page.scss'],
})
export class FreelancersPage implements OnInit {
  faSliders=faSliders;
  faSearch=faSearch;

  faTag=faTag;
  users: any =[];
  constructor(private navCtrl: NavController, private userData: MessagesServiceService) { }

  ngOnInit() {
    this.users=this.userData.getUser();
  }
  details(id: number){
    this.navCtrl.navigateForward('/profile-detail/'+id);
  }
}
