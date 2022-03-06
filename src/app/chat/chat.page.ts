/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavController } from '@ionic/angular';
import { MessagesServiceService } from '../services/messages-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messagesCounters=3;
  faSearch=faSearch;
  messages: any =[];
  users: any = [
    {
      firstName: 'Test 1',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,

      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
    },
    {
      firstName: 'Test 2',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
      firstName: 'Test 3',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      firstName: 'Test 4',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
    },
    {
      firstName: 'Test 4',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
    },
  ];
  constructor(private msgData: MessagesServiceService, private navCtrl: NavController){}

  ngOnInit() {
    this.messages=this.msgData.getData();
    console.log(this.messages);
  }
  subMessage(message: string){
    return message.substring(0, 19)+'...';
  }
  details(id: number){
    this.navCtrl.navigateForward('/chat-details/'+id);
  }
}
