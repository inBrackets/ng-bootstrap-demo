import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria',
  'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia',
  'Denmark', 'Egypt', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
  'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Japan', 'Jordan',
  'Kenya', 'Malaysia', 'Mexico', 'Netherlands', 'New Zealand', 'Nigeria',
  'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Romania', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Spain',
  'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Kingdom',
  'United States', 'Vietnam'
];

@Component({
  selector: 'app-typeahead-demo',
  imports: [FormsModule, NgbTypeaheadModule],
  template: `
    <h2 class="demo-title">Typeahead</h2>
    <p class="text-muted mb-4">Autocomplete / typeahead input powered by an Observable.</p>

    <h5>Basic (static list)</h5>
    <div class="mb-4" style="max-width: 400px">
      <input type="text" class="form-control" [(ngModel)]="model1"
        [ngbTypeahead]="search" placeholder="Type a country name..."
        [resultFormatter]="formatter" [inputFormatter]="formatter" />
      <p class="text-muted small mt-1">Selected: {{ model1 }}</p>
    </div>

    <h5>With result template</h5>
    <div class="mb-4" style="max-width: 400px">
      <input type="text" class="form-control" [(ngModel)]="model2"
        [ngbTypeahead]="search" placeholder="Type a country..."
        [resultTemplate]="rt" />
      <ng-template #rt let-r="result" let-t="term">
        <span>🌍 </span>
        <ngb-highlight [result]="r" [term]="t"></ngb-highlight>
      </ng-template>
      <p class="text-muted small mt-1">Selected: {{ model2 }}</p>
    </div>

    <h5>With min length 2</h5>
    <div style="max-width: 400px">
      <input type="text" class="form-control" [(ngModel)]="model3"
        [ngbTypeahead]="search" [focusFirst]="false"
        placeholder="Type 2+ characters to search..." />
      <p class="text-muted small mt-1">Selected: {{ model3 }}</p>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class TypeaheadDemo {
  model1: string = '';
  model2: string = '';
  model3: string = '';

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? [] :
        COUNTRIES.filter(c => c.toLowerCase().includes(term.toLowerCase())).slice(0, 8))
    );

  formatter = (x: string) => x;
}
