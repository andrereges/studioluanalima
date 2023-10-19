import { Component } from '@angular/core';

@Component({
  selector: 'app-float-button-top',
  templateUrl: './float-button-top.component.html',
  styleUrls: ['./float-button-top.component.css']
})
export class FloatButtonTopComponent {
    
  ngAfterViewInit() {
    const btnGoTop = document.getElementById("float-button-top");

    btnGoTop?.classList.add("invisible");
    
    window.addEventListener('scroll', () => {
      btnGoTop?.classList.add("invisible");
        
      this.isPageTop()
        ? btnGoTop?.classList.remove("invisible")
        : btnGoTop?.classList.add("invisible");
      
    });

  }

  isPageTop() {
    return window.scrollY > 0;
  } 

}
