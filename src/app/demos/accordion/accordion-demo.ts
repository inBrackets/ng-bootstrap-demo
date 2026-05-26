import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion-demo',
  imports: [NgbAccordionModule],
  template: `
    <h2 class="demo-title">Accordion</h2>
    <p class="text-muted mb-4">Collapsible content panels for presenting information in a limited amount of space.</p>

    <h5>Basic Accordion</h5>
    <div ngbAccordion class="mb-4">
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Panel One</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
            </ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Panel Two</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee.
            </ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem [disabled]="true">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Panel Three (disabled)</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>This panel is disabled and cannot be opened.</ng-template>
          </div>
        </div>
      </div>
    </div>

    <h5>Always open (closeOthers = false)</h5>
    <div ngbAccordion [closeOthers]="false" class="mb-4">
      <div ngbAccordionItem [collapsed]="false">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>First</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>Multiple panels can be open simultaneously.</ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Second</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>Open me alongside the first one!</ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Third</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>All three can be expanded at once.</ng-template>
          </div>
        </div>
      </div>
    </div>

    <h5>Programmatic control</h5>
    <div ngbAccordion #acc="ngbAccordion" class="mb-3">
      <div ngbAccordionItem="panelA">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Panel A</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody><ng-template>Content of panel A.</ng-template></div>
        </div>
      </div>
      <div ngbAccordionItem="panelB">
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Panel B</button>
        </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody><ng-template>Content of panel B.</ng-template></div>
        </div>
      </div>
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-sm btn-outline-primary" (click)="acc.toggle('panelA')">Toggle A</button>
      <button class="btn btn-sm btn-outline-primary" (click)="acc.toggle('panelB')">Toggle B</button>
      <button class="btn btn-sm btn-outline-secondary" (click)="acc.collapseAll()">Collapse all</button>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AccordionDemo {}
