import { Component, OnInit } from '@angular/core';
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  faUser=faUser;
  faPen=faPen;
  constructor() { }

  ngOnInit() {
  }

}
