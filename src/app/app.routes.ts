import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'accordion', pathMatch: 'full' },
  { path: 'accordion', loadComponent: () => import('./demos/accordion/accordion-demo').then(m => m.AccordionDemo) },
  { path: 'alert', loadComponent: () => import('./demos/alert/alert-demo').then(m => m.AlertDemo) },
  { path: 'buttons', loadComponent: () => import('./demos/buttons/buttons-demo').then(m => m.ButtonsDemo) },
  { path: 'carousel', loadComponent: () => import('./demos/carousel/carousel-demo').then(m => m.CarouselDemo) },
  { path: 'collapse', loadComponent: () => import('./demos/collapse/collapse-demo').then(m => m.CollapseDemo) },
  { path: 'datepicker', loadComponent: () => import('./demos/datepicker/datepicker-demo').then(m => m.DatepickerDemo) },
  { path: 'dropdown', loadComponent: () => import('./demos/dropdown/dropdown-demo').then(m => m.DropdownDemo) },
  { path: 'modal', loadComponent: () => import('./demos/modal/modal-demo').then(m => m.ModalDemo) },
  { path: 'offcanvas', loadComponent: () => import('./demos/offcanvas/offcanvas-demo').then(m => m.OffcanvasDemo) },
  { path: 'pagination', loadComponent: () => import('./demos/pagination/pagination-demo').then(m => m.PaginationDemo) },
  { path: 'popover', loadComponent: () => import('./demos/popover/popover-demo').then(m => m.PopoverDemo) },
  { path: 'progress', loadComponent: () => import('./demos/progress/progress-demo').then(m => m.ProgressDemo) },
  { path: 'rating', loadComponent: () => import('./demos/rating/rating-demo').then(m => m.RatingDemo) },
  { path: 'tabs', loadComponent: () => import('./demos/tabs/tabs-demo').then(m => m.TabsDemo) },
  { path: 'timepicker', loadComponent: () => import('./demos/timepicker/timepicker-demo').then(m => m.TimepickerDemo) },
  { path: 'toast', loadComponent: () => import('./demos/toast/toast-demo').then(m => m.ToastDemo) },
  { path: 'tooltip', loadComponent: () => import('./demos/tooltip/tooltip-demo').then(m => m.TooltipDemo) },
  { path: 'typeahead', loadComponent: () => import('./demos/typeahead/typeahead-demo').then(m => m.TypeaheadDemo) },
];
