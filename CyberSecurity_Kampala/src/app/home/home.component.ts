import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { NavbarComponent} from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  ngAfterViewInit() {
    // You can access the NavbarComponent here
    console.log(this.navbar);
  }
}
