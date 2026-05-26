import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem { label: string; route: string; }
interface NavCategory { name: string; items: NavItem[]; }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  categories: NavCategory[] = [
    {
      name: 'Layout',
      items: [
        { label: 'Accordion', route: '/accordion' },
        { label: 'Collapse', route: '/collapse' },
      ]
    },
    {
      name: 'Navigation',
      items: [
        { label: 'Dropdown', route: '/dropdown' },
        { label: 'Pagination', route: '/pagination' },
        { label: 'Tabs & Nav', route: '/tabs' },
      ]
    },
    {
      name: 'Feedback',
      items: [
        { label: 'Alert', route: '/alert' },
        { label: 'Progress', route: '/progress' },
        { label: 'Rating', route: '/rating' },
        { label: 'Toast', route: '/toast' },
      ]
    },
    {
      name: 'Overlays',
      items: [
        { label: 'Modal', route: '/modal' },
        { label: 'Offcanvas', route: '/offcanvas' },
        { label: 'Popover', route: '/popover' },
        { label: 'Tooltip', route: '/tooltip' },
      ]
    },
    {
      name: 'Forms',
      items: [
        { label: 'Buttons', route: '/buttons' },
        { label: 'Carousel', route: '/carousel' },
        { label: 'Datepicker', route: '/datepicker' },
        { label: 'Timepicker', route: '/timepicker' },
        { label: 'Typeahead', route: '/typeahead' },
      ]
    },
  ];
}
