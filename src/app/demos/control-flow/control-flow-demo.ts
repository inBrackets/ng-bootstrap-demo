import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

@Component({
  selector: 'app-control-flow-demo',
  imports: [],
  templateUrl: './control-flow-demo.html',
  styleUrl: './control-flow-demo.sass'
})
export class ControlFlowDemo {

  // ─── @if ──────────────────────────────────────────────────────────────────

  // Example 1: @if / @else
  // The @if block renders when the expression is truthy.
  // The @else block renders when it is falsy.
  showAlert = signal(false);

  // Example 2: @if / @else if / @else chain
  // Angular evaluates each branch top-to-bottom and renders the first match.
  // Changing this signal causes Angular to re-evaluate the whole chain.
  score = signal(72);

  // Example 3: @if (expression; as alias)
  // When the expression is truthy Angular binds it to 'alias' inside the block.
  // This avoids calling the expression twice AND gives you a typed, non-null value.
  // Here profile() returns null (falsy → @else) or an object (truthy → @if).
  profile = signal<{ name: string; role: string; avatar: string } | null>(null);

  loadProfile() {
    this.profile.set({ name: 'Jason Kowalski', role: 'Senior Developer', avatar: 'JK' });
  }

  clearProfile() {
    this.profile.set(null);
  }

  // ─── @for ─────────────────────────────────────────────────────────────────

  // Example 4: implicit loop context variables
  // Inside every @for block Angular exposes: $index, $first, $last, $even, $odd, $count.
  // No declaration needed — just reference them directly in the template.
  colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

  // Example 5: @for + @empty
  // @empty renders automatically when the iterable has zero items.
  // This replaces the old "items.length === 0" pattern entirely.
  private _nextId = 3;

  tasks = signal<Task[]>([
    { id: 1, text: 'Learn Angular signals', done: true },
    { id: 2, text: 'Build a demo app', done: false },
    { id: 3, text: 'Write tests', done: false },
  ]);

  addTask() {
    const id = ++this._nextId;
    this.tasks.update(list => [...list, { id, text: `New task #${id}`, done: false }]);
  }

  removeTask(id: number) {
    this.tasks.update(list => list.filter(t => t.id !== id));
  }

  toggleTask(id: number) {
    this.tasks.update(list =>
      list.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }

  // Example 6: nested @for
  // The outer loop iterates groups; the inner loop iterates each group's items.
  // Each loop has its own independent $index / $first / $last context.
  techStack = [
    { category: 'Frontend', icon: 'bi-window',  items: ['Angular', 'TypeScript', 'SASS'] },
    { category: 'Backend',  icon: 'bi-server',  items: ['Node.js', 'PostgreSQL', 'Redis'] },
    { category: 'DevOps',   icon: 'bi-gear',    items: ['Docker', 'GitHub Actions', 'nginx'] },
  ];

  // ─── @switch ──────────────────────────────────────────────────────────────

  // Example 7: @switch
  // Angular compares the switch expression to each @case using strict equality (===).
  // Only the first matching @case renders. @default renders when nothing matches.
  orderStatus = signal<OrderStatus>('pending');
  readonly statuses: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  // Example 8: @switch on a number — showing star-rating feedback
  rating = signal(3);
}
