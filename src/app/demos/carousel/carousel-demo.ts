import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-demo',
  imports: [NgbCarouselModule],
  template: `
    <h2 class="demo-title">Carousel</h2>
    <p class="text-muted mb-4">A slideshow component for cycling through elements.</p>

    <h5>Basic Carousel</h5>
    <ngb-carousel class="mb-4 d-block" style="max-width: 640px">
      @for (slide of slides; track slide.id) {
        <ng-template ngbSlide [id]="slide.id">
          <div class="carousel-slide d-flex align-items-center justify-content-center"
               [style.background]="slide.bg">
            <div class="text-center text-white p-4">
              <h3>{{ slide.title }}</h3>
              <p>{{ slide.text }}</p>
            </div>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.title }}</h5>
          </div>
        </ng-template>
      }
    </ngb-carousel>

    <h5>No wrap, no indicators</h5>
    <ngb-carousel [wrap]="false" [showNavigationIndicators]="false" style="max-width: 640px">
      @for (slide of slides; track slide.id) {
        <ng-template ngbSlide [id]="slide.id + '-b'">
          <div class="carousel-slide d-flex align-items-center justify-content-center"
               [style.background]="slide.bg">
            <span class="text-white fs-4 fw-bold">{{ slide.title }}</span>
          </div>
        </ng-template>
      }
    </ngb-carousel>
  `,
  styles: [`:host { display: block; } .carousel-slide { height: 200px; border-radius: 4px; }`]
})
export class CarouselDemo {
  slides = [
    { id: 's1', title: 'First Slide', text: 'Some representative placeholder content.', bg: '#5c6bc0' },
    { id: 's2', title: 'Second Slide', text: 'Another slide with great content here.', bg: '#26a69a' },
    { id: 's3', title: 'Third Slide', text: 'Yet another slide to demonstrate cycling.', bg: '#ef5350' },
  ];
}
