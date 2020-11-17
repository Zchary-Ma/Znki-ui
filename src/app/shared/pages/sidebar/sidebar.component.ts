import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  selector: 'app-sidebar',
})
export class SidebarComponent implements OnInit {
  menuItems: { label: string; icon: string; url: string }[] = [
    { label: 'Overview', icon: '', url: '/overview' },
    { label: 'Znki', icon: '', url: '/list' },
    { label: 'About', icon: '', url: '/about' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
