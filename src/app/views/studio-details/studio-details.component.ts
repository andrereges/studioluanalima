import { Component } from '@angular/core';
import { Studio } from 'src/app/interfaces/studio';
import { StudioService } from 'src/app/services/studio.service';

@Component({
  selector: 'app-studio-details',
  templateUrl: './studio-details.component.html',
  styleUrls: ['./studio-details.component.css']
})
export class StudioDetailsComponent {
  studio: Studio | undefined;

  constructor(
    private studioService: StudioService
  ) { }

  ngOnInit(): void {
    this.getStudio();
  }
  
  getStudio(): void {
    const id = 'f8c3de3d-1fea-4d7c-a8b0-29f63c4c3410';
    
    this.studioService.getById(id)
      .subscribe(studios => this.studio = studios[0]);
  }
  
}