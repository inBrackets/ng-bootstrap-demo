import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

interface NavItem { label: string; route: string; icon: string; }
interface NavCategory { name: string; items: NavItem[]; }

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbDropdownItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass'
})
export class Navbar {
  navbarOpen = false;

  categories: NavCategory[] = [
    {
      name: 'Layout',
      items: [
        { label: 'Accordion', route: '/accordion', icon: 'bi-layout-text-sidebar' },
        { label: 'Collapse', route: '/collapse', icon: 'bi-arrows-collapse' },
      ]
    },
    {
      name: 'Navigation',
      items: [
        { label: 'Dropdown', route: '/dropdown', icon: 'bi-menu-button-wide' },
        { label: 'Pagination', route: '/pagination', icon: 'bi-123' },
        { label: 'Tabs & Nav', route: '/tabs', icon: 'bi-folder2-open' },
      ]
    },
    {
      name: 'Feedback',
      items: [
        { label: 'Alert', route: '/alert', icon: 'bi-exclamation-triangle' },
        { label: 'Progress', route: '/progress', icon: 'bi-bar-chart-line' },
        { label: 'Rating', route: '/rating', icon: 'bi-star-half' },
        { label: 'Toast', route: '/toast', icon: 'bi-bell' },
      ]
    },
    {
      name: 'Overlays',
      items: [
        { label: 'Modal', route: '/modal', icon: 'bi-window-stack' },
        { label: 'Offcanvas', route: '/offcanvas', icon: 'bi-layout-sidebar-reverse' },
        { label: 'Popover', route: '/popover', icon: 'bi-chat-square-text' },
        { label: 'Tooltip', route: '/tooltip', icon: 'bi-info-circle' },
      ]
    },
    {
      name: 'Forms',
      items: [
        { label: 'Buttons', route: '/buttons', icon: 'bi-hand-index' },
        { label: 'Carousel', route: '/carousel', icon: 'bi-images' },
        { label: 'Datepicker', route: '/datepicker', icon: 'bi-calendar3' },
        { label: 'Timepicker', route: '/timepicker', icon: 'bi-clock' },
        { label: 'Typeahead', route: '/typeahead', icon: 'bi-search' },
        { label: 'Signal Forms', route: '/signal-forms', icon: 'bi-lightning-charge' },
      ]
    },
  ];
}
