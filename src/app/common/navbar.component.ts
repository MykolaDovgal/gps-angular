import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
<!-- nav-left -->
  <div class="wrapper-nav" >
    <nav>
      <ul class="navbar">
        <li class="active btn-orang"><a href="#">ROUTE</a></li>
        <li class="btn-orang"><a href="#">HISTORY</a></li>
      </ul>
    </nav>
  </div>
<!--end nav-left -->
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
