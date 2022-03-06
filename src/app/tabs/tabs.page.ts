import { Component } from '@angular/core';
import { faHouseChimney, faBriefcase, faCommentDollar, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  faHouseChimney=faHouseChimney;
  faUser=faUser;
  faBriefcase=faBriefcase;
  faCommentDollar=faCommentDollar;
  constructor() {}

}
