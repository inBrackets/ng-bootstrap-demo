import { Component, signal, computed } from '@angular/core';

type CardStatus = 'default' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-class-style-bindings-demo',
  imports: [],
  templateUrl: './class-style-bindings-demo.html',
  styleUrl: './class-style-bindings-demo.sass'
})
export class ClassStyleBindingsDemo {

  // ─── CLASS BINDING STATE ────────────────────────────────────────────────────

  // Example 1 – [class.someClass]="boolean"
  // A plain signal holding a boolean. When true the class is added, when false it's removed.
  isHighlighted = signal(false);

  toggleHighlight() {
    //this.isHighlighted.set(true);
    this.isHighlighted.set(!this.isHighlighted());
    console.log('isHighlighted changed to:', this.isHighlighted());
  }

  // Example 2 – [class]="object"
  // The object keys are CSS class names; the values decide whether each class is on or off.
  alertType = signal<'success' | 'warning' | 'danger'>('success');

  // Computed derives a new value from signals automatically. Angular re-runs this
  // whenever alertType() changes, so the object stays in sync.
  alertClasses = computed(() => ({
    'alert': true,                                          // always applied
    'alert-success': this.alertType() === 'success',
    'alert-warning': this.alertType() === 'warning',
    'alert-danger':  this.alertType() === 'danger',
  }));

  // Example 3 – [class]="object" built from independent toggles
  bold      = signal(false);
  italic    = signal(false);
  underline = signal(false);

  // Angular reads all three signals inside computed() and rebuilds the object whenever any one changes.
  textFormatClasses = computed(() => ({
    'fw-bold':                   this.bold(),
    'fst-italic':                this.italic(),
    'text-decoration-underline': this.underline(),
  }));

  // ─── STYLE BINDING STATE ────────────────────────────────────────────────────

  // Example 4 – [style.color]="value"
  // A plain string that gets used as the value of the CSS color property.
  textColor = signal('#0d6efd');

  // Example 5 – [style.font-size.px]="number"
  // The ".px" unit suffix tells Angular to append "px" for you, so you just store a number.
  fontSize = signal(20);

  // Example 6 – [style]="object" (multiple styles at once)
  bgColor      = signal('#ffffff');
  padding      = signal(16);
  borderRadius = signal(8);

  // Computed returns a plain style object. Angular applies every key as a CSS property.
  boxStyle = computed(() => ({
    backgroundColor: this.bgColor(),
    padding:         this.padding() + 'px',
    borderRadius:    this.borderRadius() + 'px',
    transition:      'all 0.25s ease',  // constant — doesn't need to be in a signal
  }));

  // ─── COMBINED EXAMPLE ───────────────────────────────────────────────────────

  // Example 7 – class + style bindings together on one element
  cardStatus = signal<CardStatus>('default');

  // Classes that reflect the current status
  statusCardClasses = computed(() => ({
    'status-card':    true,
    'border-success': this.cardStatus() === 'success',
    'border-danger':  this.cardStatus() === 'error',
    'border-warning': this.cardStatus() === 'loading',
  }));

  // Inline styles that also reflect the current status
  statusCardStyle = computed(() => ({
    opacity:    this.cardStatus() === 'loading' ? '0.6' : '1',
    transform:  this.cardStatus() === 'loading' ? 'scale(0.97)' : 'scale(1)',
    transition: 'all 0.3s ease',
  }));

  statusLabel = computed(() => {
    const labels: Record<CardStatus, string> = {
      default: 'No status yet',
      loading: 'Loading…',
      success: 'Operation succeeded!',
      error:   'Something went wrong.',
    };
    return labels[this.cardStatus()];
  });
}
