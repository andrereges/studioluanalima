import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-navbar-goback',
  templateUrl: './navbar-goback.component.html',
  styleUrls: ['./navbar-goback.component.css']
})
export class NavbarGoBackComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
