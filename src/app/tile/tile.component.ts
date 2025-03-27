import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tile',
  imports: [ FormsModule ],
  template: `
    <input
      [class.error]="error"
      class="tile"
      type="text"
      [(ngModel)]="text"
      (ngModelChange)="onTextChange($event)"
      tabindex="0"
    />
  `,
  styles: [
    `
.tile {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 5px;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 4px;
  outline: none;
  caret-color: transparent; /* No blinking cursor */
}

.tile:focus {
  border: 3px solid blue;
  margin: 3px;
}

.error {
  border-color: red;
}

.tile::-webkit-outer-spin-button,
.tile::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tile[type=number] {
  -moz-appearance: textfield; /* Remove spinner in Firefox */
  appearance: textfield;
}
`
  ]
})
export class TileComponent {
  @Input() number: number = 0;
  @Output() numberChange = new EventEmitter<number>();
  @Input() error: boolean = false;
  text: string = "";

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.number !== 0) {
      this.text = this.number.toString();
    }
  }

  onTextChange(value: string) {
    if (value.length > 1) {
      value = value.slice(-1); // Keep only the last entered digit
    }
    if (value.match(/^[1-9]$/)) {
      this.number = Number(value);
      this.text = value;
    } else {
      this.number = 0;
      this.text = "";
    }
    this.el.nativeElement.querySelector('.tile').value = this.text; // Explicitly update the input's value
    this.numberChange.emit(this.number);
  }
}
