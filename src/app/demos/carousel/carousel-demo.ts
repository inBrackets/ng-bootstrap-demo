import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-demo',
  imports: [NgbCarouselModule],
  templateUrl: './carousel-demo.html',
  styleUrl: './carousel-demo.sass'
})
export class CarouselDemo {
  slides = [
    { id: 's1', title: 'First Slide', text: 'Some representative placeholder content.', bg: '#5c6bc0' },
    { id: 's2', title: 'Second Slide', text: 'Another slide with great content here.', bg: '#26a69a' },
    { id: 's3', title: 'Third Slide', text: 'Yet another slide to demonstrate cycling.', bg: '#ef5350' },
  ];
}
