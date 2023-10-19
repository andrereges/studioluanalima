import { Component, Input } from '@angular/core';
import { Carousel } from 'src/app/interfaces/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input('carouselData') carouselData: Carousel | null = {
    id: '0',
    width: '100%',
    height: '640px',
    slideInterval: 3000,
    images: []
  }

  constructor() { }

}
