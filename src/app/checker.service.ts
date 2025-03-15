import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  constructor() { }

  check(numbers: number[][]): number[][] {

    var errors = [];

    // ensure valid numbers
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (numbers[i][j] <= 0 || numbers[i][j] > 9) {
          errors.push([i, j]);
        }
      }
    }

    if (errors.length > 0)
      return errors;

    // check rows
    for (var i = 0; i < 9; i++) {
      var values = [];
      for (var j = 0; j < 9; j++)
        values.push(numbers[i][j]);

      values = values.sort();

      for (var k = 0; k < 8; k++) {
        if (values[k] == values[k + 1]) {
          for (var j = 0; j < 9; j++) {
            if (numbers[i][j] == values[k])
              errors.push([i, j]);
          }
          break;
        }
      }
    }

    //check columns
    for (var i = 0; i < 9; i++) {
      var values = [];
      for (var j = 0; j < 9; j++)
        values.push(numbers[j][i]);

      values = values.sort();

      for (var k = 0; k < 8; k++) {
        if (values[k] == values[k + 1]) {
          for (var j = 0; j < 9; j++) {
            if (numbers[j][i] == values[k])
              errors.push([j, i]);
          }
          break;
        }
      }
    }

    //check squares
    for (var i = 0; i < 9; i++) {
      var values = [];
      for (var j = 0; j < 9; j++) {
        var x = (i % 3) * 3 + (j % 3);
        var y = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        values.push(numbers[x][y]);
      }

      values = values.sort();

      for (var k = 0; k < 8; k++) {
        if (values[k] == values[k + 1]) {
          for (var j = 0; j < 9; j++) {
            var x = (i % 3) * 3 + (j % 3);
            var y = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (numbers[x][y] == values[k])
              errors.push([x,y]);
          }
          break;
        }
      }
    }

    return errors;
  }
}
