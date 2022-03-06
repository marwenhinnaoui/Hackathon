import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { faPaperPlane, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {
  faPaperPlane=faPaperPlane;
  faChevronLeft=faChevronLeft;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
