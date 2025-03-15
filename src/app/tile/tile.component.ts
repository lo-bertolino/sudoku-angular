import { Component, Input, Output, HostListener, ElementRef , SimpleChanges, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tile',
  imports: [ FormsModule ],
  template: `
 <p [class.error]="error" class="tile" tabindex="0" >{{text}}</p>
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
  // border-color: blue; /* Blue border when selected */
  border: 3px solid blue;
  margin: 3px;
}

.error{
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

  constructor(private el: ElementRef) {
  }


  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.stopPropagation();
    if (event.key >= '1' && event.key <= '9') {
      this.text = event.key;
      this.number = Number(event.key);
    } else if (event.key === 'Backspace') {
      this.number = 0;
      this.text = "";
    }
    this.numberChange.emit(this.number);
  }

  ngOnInit() {
    if(this.number != 0)
      this.text = this.number.toString();
  }

  @HostListener('click')
  handleClick() {
    this.el.nativeElement.querySelector('.tile').focus();
  }

}
