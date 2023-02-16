import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch , faWrench , faBell} from '@fortawesome/free-solid-svg-icons';
import { TestloginService } from './../../services/testlogin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSide: EventEmitter<string> = new EventEmitter();
  searchText: string = '';
  faSearch = faSearch;
  faWrench = faWrench ;
  faBell = faBell ;
  notificationNumber : number = 0;
  notificationsList : any [] = [];
  hideNotification = false;
  settingList : any [] = [];


  constructor(private loginService:TestloginService , private route : Router) { 
    this.notificationsList = [
      { title:'welcome ...'} ,
      {title:"we have a discount let's see it "},
      { title:'welcome ...'} ,
      {title:"we have a discount let's see it "},
    ]
    this.settingList = [
      { title:'Logout'} ,
      { title:'Edit ...'} ,
      { title:'Edit ...'} ,
      { title:'Edit ...'} ,
      { title:'Edit ...'} ,
    ]
    this.notificationNumber = this.notificationsList.length ;
  }

  ngOnInit(): void {
  }

  toggleNotificationBadge() {
    this.hideNotification = true;
    this.notificationNumber = 0 ;

  }
  Logout()
  {
    this.loginService.Logout();
    this.route.navigate([''])
  }

}
