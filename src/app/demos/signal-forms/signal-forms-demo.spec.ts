/**
 * Signal Forms – Unit Tests
 *
 * KEY CONCEPT: Because SignalFormsDemo holds its entire state in plain signals
 * (no injected services, no DOM interaction), we can test it by simply
 * calling `new SignalFormsDemo()`.  There is no need for Angular's TestBed.
 *
 * Signals are just JavaScript values that happen to notify consumers when
 * they change.  Reading a signal is a normal function call: `signal()`.
 * Writing to one is also a normal call: `signal.set(value)`.
 * Computed signals re-evaluate lazily when their dependencies change,
 * so reading `computed()` after updating an upstream signal always returns
 * the latest derived value – no async flushing required.
 */

import { SignalFormsDemo } from './signal-forms-demo';

describe('SignalFormsDemo', () => {

  // ── Shared instance ────────────────────────────────────────────────────────
  // A fresh component is created before each test so tests are completely
  // independent and cannot pollute each other's state.
  let component: SignalFormsDemo;

  beforeEach(() => {
    component = new SignalFormsDemo();
  });

  // ── Initial state ──────────────────────────────────────────────────────────
  describe('initial state', () => {

    /**
     * All field signals must start empty / at their default values.
     * Reading a signal is done by calling it as a function: `signal()`.
     */
    it('should initialise field signals to their default values', () => {
      expect(component.name()).toBe('');
      expect(component.email()).toBe('');
      expect(component.role()).toBe('viewer');
      expect(component.bio()).toBe('');
      expect(component.subscribe()).toBe(false);
    });

    /**
     * Validation errors are hidden until the user has interacted with a
     * field (the "touched" pattern).  Before any touch, both computed
     * error signals must return null.
     */
    it('should not show validation errors before any field is touched', () => {
      expect(component.nameError()).toBeNull();
      expect(component.emailError()).toBeNull();
    });

    /**
     * isValid is a computed signal derived from name and email.
     * With both empty it must be false from the start.
     */
    it('should report the form as invalid when fields are empty', () => {
      expect(component.isValid()).toBe(false);
    });

    /**
     * bioLength is a computed signal that reflects bio.length.
     * An empty bio means the counter starts at zero.
     */
    it('should report a bio character count of 0', () => {
      expect(component.bioLength()).toBe(0);
    });

    /**
     * No submission has happened yet, so result must be null.
     */
    it('should have no submitted result', () => {
      expect(component.result()).toBeNull();
    });
  });

  // ── Writing to writable signals ────────────────────────────────────────────
  describe('writable signals', () => {

    /**
     * Calling signal.set() replaces the current value.
     * The new value is immediately readable on the next signal() call.
     */
    it('should update name when set', () => {
      component.name.set('Alice');
      expect(component.name()).toBe('Alice');
    });

    it('should update email when set', () => {
      component.email.set('alice@example.com');
      expect(component.email()).toBe('alice@example.com');
    });

    it('should update role when set', () => {
      component.role.set('admin');
      expect(component.role()).toBe('admin');
    });

    it('should update subscribe when set', () => {
      component.subscribe.set(true);
      expect(component.subscribe()).toBe(true);
    });
  });

  // ── computed: bioLength ────────────────────────────────────────────────────
  describe('bioLength computed', () => {

    /**
     * computed() re-evaluates automatically whenever a dependency signal
     * changes.  There is no manual "trigger" or subscribe() call needed.
     */
    it('should reflect the current bio character count', () => {
      component.bio.set('Hello');
      expect(component.bioLength()).toBe(5);
    });

    it('should update immediately after bio changes', () => {
      component.bio.set('Angular signals are great!');
      expect(component.bioLength()).toBe(component.bio().length);
    });
  });

  // ── computed: nameError ────────────────────────────────────────────────────
  describe('nameError computed', () => {

    /**
     * The "touched" guard prevents showing errors on pristine fields.
     * Until nameTouched is true, nameError must always be null regardless
     * of what name() contains.
     */
    it('should return null when the field has not been touched', () => {
      component.name.set('');
      expect(component.nameError()).toBeNull();
    });

    /**
     * Once the user has touched the field (blur), the validation logic runs.
     * An empty name should produce a "required" error.
     */
    it('should return a required error when touched with an empty name', () => {
      component.nameTouched.set(true);
      component.name.set('');
      expect(component.nameError()).toBe('Name is required');
    });

    /**
     * Names shorter than 2 characters are invalid.
     */
    it('should return a length error for a single-character name', () => {
      component.nameTouched.set(true);
      component.name.set('A');
      expect(component.nameError()).toBe('Minimum 2 characters');
    });

    /**
     * A name with at least 2 non-whitespace characters is valid.
     */
    it('should return null for a valid name', () => {
      component.nameTouched.set(true);
      component.name.set('Alice');
      expect(component.nameError()).toBeNull();
    });

    /**
     * A name that is only whitespace should be treated as empty after trim().
     */
    it('should treat a whitespace-only name as empty', () => {
      component.nameTouched.set(true);
      component.name.set('   ');
      expect(component.nameError()).toBe('Name is required');
    });
  });

  // ── computed: emailError ───────────────────────────────────────────────────
  describe('emailError computed', () => {

    it('should return null when the field has not been touched', () => {
      component.email.set('not-an-email');
      expect(component.emailError()).toBeNull();
    });

    it('should return a required error when touched with an empty email', () => {
      component.emailTouched.set(true);
      component.email.set('');
      expect(component.emailError()).toBe('Email is required');
    });

    it('should return a format error for an invalid email', () => {
      component.emailTouched.set(true);
      component.email.set('not-an-email');
      expect(component.emailError()).toBe('Invalid email address');
    });

    it('should return null for a valid email', () => {
      component.emailTouched.set(true);
      component.email.set('alice@example.com');
      expect(component.emailError()).toBeNull();
    });
  });

  // ── computed: isValid ──────────────────────────────────────────────────────
  describe('isValid computed', () => {

    /**
     * isValid is derived purely from name and email — not from the touched
     * signals.  It does not care whether the user has interacted with the
     * fields; it only reflects whether the values are acceptable.
     */
    it('should be false when name is too short', () => {
      component.name.set('A');
      component.email.set('alice@example.com');
      expect(component.isValid()).toBe(false);
    });

    it('should be false when email is invalid', () => {
      component.name.set('Alice');
      component.email.set('not-an-email');
      expect(component.isValid()).toBe(false);
    });

    it('should be true when both name and email are valid', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      expect(component.isValid()).toBe(true);
    });

    /**
     * Changing a field after it was valid should immediately invalidate the
     * form — no delay, no zone.run() needed.
     */
    it('should react immediately when a valid field is cleared', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      expect(component.isValid()).toBe(true);

      component.email.set('');
      expect(component.isValid()).toBe(false);
    });
  });

  // ── submit() ───────────────────────────────────────────────────────────────
  describe('submit()', () => {

    /**
     * Calling submit() with invalid data should mark both fields as touched
     * (so errors become visible) but must NOT write to result.
     */
    it('should mark fields as touched on a failed submission', () => {
      component.submit();

      expect(component.nameTouched()).toBe(true);
      expect(component.emailTouched()).toBe(true);
    });

    it('should not set a result when the form is invalid', () => {
      component.submit();

      expect(component.result()).toBeNull();
    });

    /**
     * A successful submission writes the current field values into result().
     */
    it('should populate result with the form data on a valid submission', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      component.role.set('admin');
      component.bio.set('Hello world');
      component.subscribe.set(true);

      component.submit();

      const result = component.result();
      expect(result).not.toBeNull();
      expect(result!.name).toBe('Alice');
      expect(result!.email).toBe('alice@example.com');
      expect(result!.role).toBe('admin');
      expect(result!.bio).toBe('Hello world');
      expect(result!.subscribe).toBe(true);
    });

    it('should not submit when only name is valid', () => {
      component.name.set('Alice');
      component.submit();
      expect(component.result()).toBeNull();
    });

    it('should not submit when only email is valid', () => {
      component.email.set('alice@example.com');
      component.submit();
      expect(component.result()).toBeNull();
    });
  });

  // ── reset() ────────────────────────────────────────────────────────────────
  describe('reset()', () => {

    /**
     * reset() must restore every signal to its initial value, including
     * the touched flags and any previously submitted result.
     */
    it('should clear all field signals', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      component.bio.set('Some bio');
      component.subscribe.set(true);

      component.reset();

      expect(component.name()).toBe('');
      expect(component.email()).toBe('');
      expect(component.bio()).toBe('');
      expect(component.subscribe()).toBe(false);
    });

    it('should reset role to the default value', () => {
      component.role.set('admin');
      component.reset();
      expect(component.role()).toBe('viewer');
    });

    it('should clear touched flags', () => {
      component.nameTouched.set(true);
      component.emailTouched.set(true);
      component.reset();
      expect(component.nameTouched()).toBe(false);
      expect(component.emailTouched()).toBe(false);
    });

    it('should clear a previous submission result', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      component.submit();
      expect(component.result()).not.toBeNull();

      component.reset();
      expect(component.result()).toBeNull();
    });

    /**
     * After reset, computed signals that depended on the cleared values
     * must also reflect the clean state.
     */
    it('should restore isValid to false after reset', () => {
      component.name.set('Alice');
      component.email.set('alice@example.com');
      expect(component.isValid()).toBe(true);

      component.reset();
      expect(component.isValid()).toBe(false);
    });

    it('should restore bioLength to 0 after reset', () => {
      component.bio.set('Some text');
      component.reset();
      expect(component.bioLength()).toBe(0);
    });
  });
});
