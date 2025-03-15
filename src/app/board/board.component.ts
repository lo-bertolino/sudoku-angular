import { Component, inject } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { CheckerService } from '../checker.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-board',
  imports: [TileComponent],
  template: `
  <button (click)="check()">Check solution</button>
  <p>{{status}}</p>
  <div class="bigrow">
  <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[0][0]" [error]="errors[0][0]"> </tile>
      <!-- <tile [(number)]="numbers[0][0]" (numberChange)="updateCell(0,0,$event)" [error]="true"> </tile> -->
      <tile [(number)]="numbers[0][1]" [error]="errors[0][1]"> </tile>
      <tile [(number)]="numbers[0][2]" [error]="errors[0][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[1][0]" [error]="errors[1][0]"> </tile>
      <tile [(number)]="numbers[1][1]" [error]="errors[1][1]"> </tile>
      <tile [(number)]="numbers[1][2]" [error]="errors[1][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[2][0]" [error]="errors[2][0]"> </tile>
      <tile [(number)]="numbers[2][1]" [error]="errors[2][1]"> </tile>
      <tile [(number)]="numbers[2][2]" [error]="errors[2][2]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[0][3]" [error]="errors[0][3]"> </tile>
      <tile [(number)]="numbers[0][4]" [error]="errors[0][4]"> </tile>
      <tile [(number)]="numbers[0][5]" [error]="errors[0][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[1][3]" [error]="errors[1][3]"> </tile>
      <tile [(number)]="numbers[1][4]" [error]="errors[1][4]"> </tile>
      <tile [(number)]="numbers[1][5]" [error]="errors[1][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[2][3]" [error]="errors[2][3]"> </tile>
      <tile [(number)]="numbers[2][4]" [error]="errors[2][4]"> </tile>
      <tile [(number)]="numbers[2][5]" [error]="errors[2][5]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[0][6]" [error]="errors[0][6]"> </tile>
      <tile [(number)]="numbers[0][7]" [error]="errors[0][7]"> </tile>
      <tile [(number)]="numbers[0][8]" [error]="errors[0][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[1][6]" [error]="errors[1][6]"> </tile>
      <tile [(number)]="numbers[1][7]" [error]="errors[1][7]"> </tile>
      <tile [(number)]="numbers[1][8]" [error]="errors[1][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[2][6]" [error]="errors[2][6]"> </tile>
      <tile [(number)]="numbers[2][7]" [error]="errors[2][7]"> </tile>
      <tile [(number)]="numbers[2][8]" [error]="errors[2][8]"> </tile>
    </div>
    </div>
  </div>
 <div class="bigrow">
  <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[3][0]" [error]="errors[3][0]"> </tile>
      <tile [(number)]="numbers[3][1]" [error]="errors[3][1]"> </tile>
      <tile [(number)]="numbers[3][2]" [error]="errors[3][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[4][0]" [error]="errors[4][0]"> </tile>
      <tile [(number)]="numbers[4][1]" [error]="errors[4][1]"> </tile>
      <tile [(number)]="numbers[4][2]" [error]="errors[4][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[5][0]" [error]="errors[5][0]"> </tile>
      <tile [(number)]="numbers[5][1]" [error]="errors[5][1]"> </tile>
      <tile [(number)]="numbers[5][2]" [error]="errors[5][2]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[3][3]" [error]="errors[3][3]"> </tile>
      <tile [(number)]="numbers[3][4]" [error]="errors[3][4]"> </tile>
      <tile [(number)]="numbers[3][5]" [error]="errors[3][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[4][3]" [error]="errors[4][3]"> </tile>
      <tile [(number)]="numbers[4][4]" [error]="errors[4][4]"> </tile>
      <tile [(number)]="numbers[4][5]" [error]="errors[4][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[5][3]" [error]="errors[5][3]"> </tile>
      <tile [(number)]="numbers[5][4]" [error]="errors[5][4]"> </tile>
      <tile [(number)]="numbers[5][5]" [error]="errors[5][5]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[3][6]" [error]="errors[3][6]"> </tile>
      <tile [(number)]="numbers[3][7]" [error]="errors[3][7]"> </tile>
      <tile [(number)]="numbers[3][8]" [error]="errors[3][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[4][6]" [error]="errors[4][6]"> </tile>
      <tile [(number)]="numbers[4][7]" [error]="errors[4][7]"> </tile>
      <tile [(number)]="numbers[4][8]" [error]="errors[4][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[5][6]" [error]="errors[5][6]"> </tile>
      <tile [(number)]="numbers[5][7]" [error]="errors[5][7]"> </tile>
      <tile [(number)]="numbers[5][8]" [error]="errors[5][8]"> </tile>
    </div>
    </div>
  </div>
 <div class="bigrow">
  <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[6][0]" [error]="errors[6][0]"> </tile>
      <tile [(number)]="numbers[6][1]" [error]="errors[6][1]"> </tile>
      <tile [(number)]="numbers[6][2]" [error]="errors[6][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[7][0]" [error]="errors[7][0]"> </tile>
      <tile [(number)]="numbers[7][1]" [error]="errors[7][1]"> </tile>
      <tile [(number)]="numbers[7][2]" [error]="errors[7][2]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[8][0]" [error]="errors[8][0]"> </tile>
      <tile [(number)]="numbers[8][1]" [error]="errors[8][1]"> </tile>
      <tile [(number)]="numbers[8][2]" [error]="errors[8][2]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[6][3]" [error]="errors[6][3]"> </tile>
      <tile [(number)]="numbers[6][4]" [error]="errors[6][4]"> </tile>
      <tile [(number)]="numbers[6][5]" [error]="errors[6][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[7][3]" [error]="errors[7][3]"> </tile>
      <tile [(number)]="numbers[7][4]" [error]="errors[7][4]"> </tile>
      <tile [(number)]="numbers[7][5]" [error]="errors[7][5]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[8][3]" [error]="errors[8][3]"> </tile>
      <tile [(number)]="numbers[8][4]" [error]="errors[8][4]"> </tile>
      <tile [(number)]="numbers[8][5]" [error]="errors[8][5]"> </tile>
    </div>
  </div>
    <div class="square">
    <div class= "row">
      <tile [(number)]="numbers[6][6]" [error]="errors[6][6]"> </tile>
      <tile [(number)]="numbers[6][7]" [error]="errors[6][7]"> </tile>
      <tile [(number)]="numbers[6][8]" [error]="errors[6][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[7][6]" [error]="errors[7][6]"> </tile>
      <tile [(number)]="numbers[7][7]" [error]="errors[7][7]"> </tile>
      <tile [(number)]="numbers[7][8]" [error]="errors[7][8]"> </tile>
    </div>
    <div class= "row">
      <tile [(number)]="numbers[8][6]" [error]="errors[8][6]"> </tile>
      <tile [(number)]="numbers[8][7]" [error]="errors[8][7]"> </tile>
      <tile [(number)]="numbers[8][8]" [error]="errors[8][8]"> </tile>
    </div>
    </div>
  </div>
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
