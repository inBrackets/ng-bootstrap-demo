import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-demo',
  imports: [NgbPaginationModule],
  template: `
    <h2 class="demo-title">Pagination</h2>
    <p class="text-muted mb-4">Provide pagination links for your site or app.</p>

    <h5>Basic</h5>
    <ngb-pagination [(page)]="page" [collectionSize]="70" class="d-block mb-2"></ngb-pagination>
    <p class="text-muted small mb-4">Current page: {{ page }}</p>

    <h5>With page size (15 per page)</h5>
    <ngb-pagination [(page)]="page2" [collectionSize]="120" [pageSize]="15" class="d-block mb-4"></ngb-pagination>

    <h5>Sizes</h5>
    <div class="mb-4">
      <ngb-pagination [(page)]="page" [collectionSize]="50" size="lg" class="d-block mb-2"></ngb-pagination>
      <ngb-pagination [(page)]="page" [collectionSize]="50" class="d-block mb-2"></ngb-pagination>
      <ngb-pagination [(page)]="page" [collectionSize]="50" size="sm" class="d-block mb-2"></ngb-pagination>
    </div>

    <h5>Max pages shown with boundary links</h5>
    <ngb-pagination [(page)]="page3" [collectionSize]="200" [maxSize]="5"
                    [rotate]="true" [boundaryLinks]="true" class="d-block mb-4">
    </ngb-pagination>

    <h5>Disabled</h5>
    <ngb-pagination [page]="3" [collectionSize]="50" [disabled]="true" class="d-block"></ngb-pagination>
  `,
  styles: [`:host { display: block; }`]
})
export class PaginationDemo {
  page = 1;
  page2 = 1;
  page3 = 5;
}
