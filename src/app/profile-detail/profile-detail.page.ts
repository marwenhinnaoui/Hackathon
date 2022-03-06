import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPaperPlane, faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { MessagesServiceService } from '../services/messages-service.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  id=null;
  faChevronLeft=faChevronLeft;
  faUser=faUser;
  freelancerData: any=[];
  constructor(private route: ActivatedRoute, private freelancers: MessagesServiceService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.freelancerData=this.freelancers.getUser();
  }

}
