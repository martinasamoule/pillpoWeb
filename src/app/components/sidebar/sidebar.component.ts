import { Component, OnInit } from '@angular/core';
export const ROUTES: any[] = [
  {path:"VideoReview" , title: 'Video Reviewing', icon: 'videocam' },
  {path:"VideoReview" , title: 'Analytics', icon: 'bar_chart' },
  {path:"ContentCreators" , title: 'Content Creator', icon: 'perm_camera_mic' },
  {path:"VideoReview" , title: 'Payments', icon: 'payment' },
  {path:"VideoReview" , title: 'Offers', icon: 'card_giftcard' },
  {path:"VideoReview" , title: 'Sellers', icon: 'store_mall_directory' },
  {path:"AdminsData" , title: 'Admins Data', icon: 'person_pin' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  isOpen: boolean = false;
  FormIsOpen: boolean = false;
  opened: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  sidebarToggle() {
    this.isOpen = !this.isOpen;
    this.FormIsOpen = false;
  }

  FormToggle() {
    this.FormIsOpen = !this.FormIsOpen;
  }
  toggleNav() {
    this.opened = !this.opened;
  }
}
