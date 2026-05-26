import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-demo',
  imports: [FormsModule, NgbRatingModule],
  templateUrl: './rating-demo.html',
  styleUrl: './rating-demo.sass'
})
export class RatingDemo {
  rate = 3;
  rate2 = 7;
  rate3 = 4;
}
