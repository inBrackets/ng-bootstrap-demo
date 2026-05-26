import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs-demo',
  imports: [NgbNavModule],
  templateUrl: './tabs-demo.html',
  styleUrl: './tabs-demo.sass'
})
export class TabsDemo {
  active = 1;
  pillActive = 1;
  tabs = [
    { id: 1, title: 'Tab One', content: 'Content of the first tab. Raw denim you probably haven\'t heard of them jean shorts.' },
    { id: 2, title: 'Tab Two', content: 'Content of the second tab. Food truck quinoa nesciunt laborum eiusmod.' },
    { id: 3, title: 'Tab Three', content: 'Content of the third tab. Etsy mixtape wayfarers, ethical wes anderson.' },
  ];
}
