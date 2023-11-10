import { Component, HostListener } from '@angular/core';
import { Home } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';
import { Image } from 'src/app/interfaces/image';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: Home | undefined;
  carouselImages: Array<Image> = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.setDefinitionScreen(screen.width)
  }
  
  getDescriptionHtml(): string {
    if (this.data)
      return Utils.truncate(this.data.studio.description, 400)

    return ''
  }

  getData(): void {
    this.homeService.getData()
      .subscribe(data => this.data = data[0]);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setDefinitionScreen(window.innerWidth)
  }

  private setDefinitionScreen(widthScreen: number) {
    this.carouselImages = []

    this.data?.carousel.images.forEach(image => {
      let imageUrl = image.url

      if (widthScreen <= 1080) {
        imageUrl = this.changeImageName(image.url, 'q')
      } else {
        imageUrl = this.changeImageName(image.url, 'w')
      }

      this.carouselImages.push({
        url: imageUrl,
        alt: image.alt
      })
    })
  }

  private changeImageName(path: string, letter: string): string {
    return path.replace(
      path.substring(0, path.lastIndexOf('.')), 
      path.substring(0, path.lastIndexOf('.')).concat(letter)
    )
  }

}
