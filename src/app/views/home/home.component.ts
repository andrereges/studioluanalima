import { Component } from '@angular/core';
import { Home } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: Home | undefined;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(): void {
    this.homeService.getData()
      .subscribe(data => this.data = data[0]);
  }

}
