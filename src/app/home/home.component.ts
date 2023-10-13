import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    

    const dropdownButton = this.el.nativeElement.querySelector('.dropdownButton');
    const icon = this.el.nativeElement.querySelector('.icon');
    const myDropdown = this.el.nativeElement.querySelector('.myDropdown');

    dropdownButton.addEventListener('click', () => {
      if (myDropdown.classList.contains('show')) {
        this.renderer.removeClass(myDropdown, 'show');
        this.renderer.setProperty(icon, 'className', 'fas fa-chevron-left');
      } else {
        this.renderer.addClass(myDropdown, 'show');
        this.renderer.setProperty(icon, 'className', 'fas fa-chevron-down');
      }
    });
  }

}
