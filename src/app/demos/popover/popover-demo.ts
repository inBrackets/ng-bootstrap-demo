import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-demo',
  imports: [NgbPopoverModule],
  templateUrl: './popover-demo.html',
  styleUrl: './popover-demo.sass'
})
export class PopoverDemo {
  placements = ['top', 'bottom', 'start', 'end', 'top-start', 'top-end'];
}
