/* eslint-disable max-len */
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {
  messages: any =[
    {
      id:0,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
    {
      id:1,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
    {
      id:2,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
    {
      id:3,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
    {
      id:4,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
    {
      id:5,
      name:'Test',
      messageRecap:'',
      messageDetail:'This Message only and only for testing ui only for testing',
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
      date:'20/18/2022',
    },
  ];
  users: any = [
    {
      id:0,
      firstName: 'Test 1',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 5,
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
    },
    {
      id:1,
      firstName: 'Test 2',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      id:2,
      firstName: 'Test 3',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      id:3,
      firstName: 'Test 4',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      id:4,
      firstName: 'Test 4',
      lastName: 'Test 2',
      category: 'Coding',
      feedBack: 4,
      img:'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg'
    },
  ];


  constructor(

  ) { }


  getData(){
    return this.messages;
  }
  getUser(){
    return this.users;
  }
}
