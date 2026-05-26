import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-demo',
  imports: [NgbDropdownModule],
  templateUrl: './dropdown-demo.html',
  styleUrl: './dropdown-demo.sass'
})
export class DropdownDemo {}
