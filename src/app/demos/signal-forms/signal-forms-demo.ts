import { Component, signal, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';

type Role = 'admin' | 'editor' | 'viewer';

interface SubmittedData {
  name: string;
  email: string;
  role: Role;
  bio: string;
  subscribe: boolean;
}

@Component({
  selector: 'app-signal-forms-demo',
  imports: [JsonPipe],
  templateUrl: './signal-forms-demo.html',
  styleUrl: './signal-forms-demo.sass'
})
export class SignalFormsDemo {
  readonly roles: Role[] = ['admin', 'editor', 'viewer'];

  name = signal('');
  email = signal('');
  role = signal<Role>('viewer');
  bio = signal('');
  subscribe = signal(false);

  nameTouched = signal(false);
  emailTouched = signal(false);

  nameError = computed(() => {
    if (!this.nameTouched()) return null;
    if (!this.name().trim()) return 'Name is required';
    if (this.name().trim().length < 2) return 'Minimum 2 characters';
    return null;
  });

  emailError = computed(() => {
    if (!this.emailTouched()) return null;
    if (!this.email().trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) return 'Invalid email address';
    return null;
  });

  bioLength = computed(() => this.bio().length);

  isValid = computed(() =>
    this.name().trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())
  );

  result = signal<SubmittedData | null>(null);

  submit() {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    if (this.isValid()) {
      this.result.set({
        name: this.name(),
        email: this.email(),
        role: this.role(),
        bio: this.bio(),
        subscribe: this.subscribe(),
      });
    }
  }

  reset() {
    this.name.set('');
    this.email.set('');
    this.role.set('viewer');
    this.bio.set('');
    this.subscribe.set(false);
    this.nameTouched.set(false);
    this.emailTouched.set(false);
    this.result.set(null);
  }
}
