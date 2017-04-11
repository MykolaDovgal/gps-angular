import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<!--header-->
  <header>
    <a href="#" class="logo"><img src="/img/logo.png"/></a>
    <button md-raised-button class="btn-log-out btn-orang">
      Log out
    </button>
  </header>
<!--end header-->
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
