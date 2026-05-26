import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs-demo',
  imports: [NgbNavModule],
  template: `
    <h2 class="demo-title">Tabs &amp; Nav</h2>
    <p class="text-muted mb-4">Tabbed interface with content panels via the NgbNav directive.</p>

    <h5>Basic Tabs</h5>
    <div class="mb-4">
      <ul ngbNav #nav="ngbNav" [(activeId)]="active" class="nav-tabs">
        @for (tab of tabs; track tab.id) {
          <li [ngbNavItem]="tab.id">
            <button ngbNavLink>{{ tab.title }}</button>
            <ng-template ngbNavContent>
              <div class="p-3 border border-top-0">{{ tab.content }}</div>
            </ng-template>
          </li>
        }
      </ul>
      <div [ngbNavOutlet]="nav"></div>
      <p class="text-muted small mt-2">Active tab ID: {{ active }}</p>
    </div>

    <h5>Pills</h5>
    <div class="mb-4">
      <ul ngbNav #pillNav="ngbNav" [(activeId)]="pillActive" class="nav-pills mb-3">
        @for (tab of tabs; track tab.id) {
          <li [ngbNavItem]="tab.id">
            <button ngbNavLink>{{ tab.title }}</button>
            <ng-template ngbNavContent>
              <p>{{ tab.content }}</p>
            </ng-template>
          </li>
        }
      </ul>
      <div [ngbNavOutlet]="pillNav"></div>
    </div>

    <h5>With disabled tab</h5>
    <div class="mb-4">
      <ul ngbNav #disabledNav="ngbNav" [activeId]="1" class="nav-tabs">
        <li [ngbNavItem]="1">
          <button ngbNavLink>Active</button>
          <ng-template ngbNavContent><div class="p-3 border border-top-0">First tab content.</div></ng-template>
        </li>
        <li [ngbNavItem]="2" [disabled]="true">
          <button ngbNavLink>Disabled</button>
          <ng-template ngbNavContent><div class="p-3 border border-top-0">Disabled tab.</div></ng-template>
        </li>
        <li [ngbNavItem]="3">
          <button ngbNavLink>Third</button>
          <ng-template ngbNavContent><div class="p-3 border border-top-0">Third tab content.</div></ng-template>
        </li>
      </ul>
      <div [ngbNavOutlet]="disabledNav"></div>
    </div>

    <h5>Vertical pills</h5>
    <div class="mb-4 d-flex gap-3">
      <ul ngbNav #vertNav="ngbNav" [activeId]="1" orientation="vertical" class="nav-pills">
        @for (tab of tabs; track tab.id) {
          <li [ngbNavItem]="tab.id">
            <button ngbNavLink>{{ tab.title }}</button>
            <ng-template ngbNavContent>
              <div class="p-3 ms-3">{{ tab.content }}</div>
            </ng-template>
          </li>
        }
      </ul>
      <div [ngbNavOutlet]="vertNav" class="flex-grow-1"></div>
    </div>
  `,
  styles: [`:host { display: block; }`]
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
