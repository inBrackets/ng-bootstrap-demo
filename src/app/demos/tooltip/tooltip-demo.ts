import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-demo',
  imports: [NgbTooltipModule],
  templateUrl: './tooltip-demo.html',
  styleUrl: './tooltip-demo.sass'
})
export class TooltipDemo {
  placements = ['top', 'bottom', 'start', 'end', 'top-start', 'top-end'];
}
