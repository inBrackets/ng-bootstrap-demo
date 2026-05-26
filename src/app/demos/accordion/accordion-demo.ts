import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion-demo',
  imports: [NgbAccordionModule],
  templateUrl: './accordion-demo.html',
  styleUrl: './accordion-demo.sass'
})
export class AccordionDemo {}
