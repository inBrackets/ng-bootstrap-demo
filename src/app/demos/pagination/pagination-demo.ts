import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-demo',
  imports: [NgbPaginationModule],
  templateUrl: './pagination-demo.html',
  styleUrl: './pagination-demo.sass'
})
export class PaginationDemo {
  page = 1;
  page2 = 1;
  page3 = 5;
}
