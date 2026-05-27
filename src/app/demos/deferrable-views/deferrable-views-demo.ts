import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-deferrable-views-demo',
  imports: [],
  templateUrl: './deferrable-views-demo.html',
  styleUrl: './deferrable-views-demo.sass'
})
export class DeferrableViewsDemo {

  // Used by the 'when' trigger example.
  // @defer (when loadOnDemand()) fires the moment this signal becomes true.
  // Setting it back to false does NOT unload the content — defer is one-way.
  loadOnDemand = signal(false);
}
