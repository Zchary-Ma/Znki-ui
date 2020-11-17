import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  selector: 'app-sidebar',
})
export class SidebarComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    { title: 'Overview', icon: 'home', link: '/overview' },
    { title: 'Znki', icon: 'book-open', link: '/list' },
    { title: 'About', icon: 'person', link: '/about' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
