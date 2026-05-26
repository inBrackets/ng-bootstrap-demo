import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse-demo',
  imports: [NgbCollapseModule],
  templateUrl: './collapse-demo.html',
  styleUrl: './collapse-demo.sass'
})
export class CollapseDemo {
  isCollapsed = true;

  panels = [
    { id: 1, title: 'Section One', content: 'Content for section one.', open: false },
    { id: 2, title: 'Section Two', content: 'Content for section two.', open: false },
    { id: 3, title: 'Section Three', content: 'Content for section three.', open: false },
  ];
}
