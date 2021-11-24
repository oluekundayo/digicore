import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  result: any;
  list_1 = [1, 4, 7, 2, 4];
  list_2 = [3, 4, 2, 4, 4];

  constructor() {}

  ngOnInit(): void {
    this.onOperation(this.list_1, this.list_2);
  }

  onOperation(a: any, b: any) {
    let result_1 = 0;
    let result_2 = 0
    for (let i = 0; i < 5; i++) {
      if (a[i] > b[i]) {
        result_1++;
      } else if (a[i] < b[i]) {
        result_2++;
      }
    }
    this.result = 'The Result is ' + result_1+', '+ result_2
  }
}
