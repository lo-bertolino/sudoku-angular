import { Component, inject } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { CheckerService } from '../checker.service';

@Component({
  selector: 'app-board',
  imports: [TileComponent],
  template: `
  <button (click)="check()">Check solution</button>
  <p>{{status}}</p>
  @for(bigRow of [0, 1, 2]; track $index){
    <div class="bigrow" >
    @for(bigCol of [0, 1, 2]; track $index){
      <div class="square" >
      @for(row of [0, 1, 2]; track $index){
          <div class="row">
          @for(col of [0, 1, 2]; track $index){
            <tile [(number)]="numbers[bigRow * 3 + row][bigCol * 3 + col]"
              [error]="errors[bigRow * 3 + row][bigCol * 3 + col]">
            </tile>
          }
          </div>
      }
      </div>
    }
    </div>
  }
  `,
  styles: [`
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bigrow{
  display: flex;
  flex-direction: row;
}

.row {
  display: flex;
}

.square{
  margin: 5px;
}
`]
})
export class BoardComponent {
  private checkerService = inject(CheckerService);
  numbers: number[][] = [];
  errors: boolean[][] = [];
  status: string = "";

  constructor() {
    this.initializeNumbers();
    this.resetErrors();
    // this.check();
  }

  initializeNumbers() {
    this.numbers = [
      [2, 5, 6, 8, 3, 7, 1, 4, 9],
      [7, 1, 9, 4, 2, 5, 8, 3, 6,],
      [8, 4, 3, 6, 1, 9, 2, 5, 7,],

      [4, 6, 7, 1, 5, 8, 9, 2, 3],
      // [3, 9, 2, 7, 3, 4, 5, 1, 8],
      [3, 9, 2, 7, 0, 4, 5, 1, 8],
      [5, 8, 1, 3, 9, 2, 6, 7, 4],

      [1, 7, 8, 2, 4, 6, 3, 9, 5],
      [6, 3, 5, 9, 7, 1, 4, 8, 2],
      [9, 2, 4, 5, 8, 3, 7, 6, 1]
    ]
  }

  resetErrors() {
    for (let i = 0; i < 9; i++) {
      this.errors[i] = [];
      for (let j = 0; j < 9; j++) {
        this.errors[i][j] = false;
      }
    }
  }

  updateCell(i: number, j: number, n: number) {
    console.log(i, j, n);
    this.numbers[i][j] = n;
  }

  check() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.errors[i][j] = false;
      }
    }

    var errors = this.checkerService.check(this.numbers);

    if (errors.length > 0) {
      for (var err of errors)
        this.errors[err[0]][err[1]] = true;
      this.status = "Errors found 😖"
    }
    else
      this.status = "Success 🎉"
  }
}
