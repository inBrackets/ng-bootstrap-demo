import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons-demo',
  imports: [FormsModule],
  templateUrl: './buttons-demo.html',
  styleUrl: './buttons-demo.sass'
})
export class ButtonsDemo {
  check1 = true;
  check2 = false;
  check3 = true;
  radioOptions = ['Left', 'Middle', 'Right'];
  radioSelected = 'Middle';
  singleToggle = false;
}
