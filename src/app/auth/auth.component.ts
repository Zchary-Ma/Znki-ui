import { Component, OnInit } from '@angular/core';
import Guard from '@authing/guard';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public guard: Guard = {};
  constructor() {}

  readonly userPoorId = '5fdb575e6742bb39eb1a67aa';

  ngOnInit(): void {
    this.guard = new Guard(this.userPoorId, {
      timestamp: Math.round(new Date().getTime() / 1000),
      title: 'authing-form',
    });

    this.guard.on('authenticated', (userInfo) => {
      // 用户登录成功后，你可以直接在这里获取他的用户信息
      console.log(userInfo);
    });
    this.guard.on('register', (userInfo) => {
      // 用户注册成功后，你可以直接在这里获取他的用户信息
      console.log(userInfo);
    });
    this.guard.on('scanned-success', (userInfo) => {
      // 用户扫码登录成功后，你可以直接在这里获取他的用户信息
      console.log(userInfo);
    });
  }
}
