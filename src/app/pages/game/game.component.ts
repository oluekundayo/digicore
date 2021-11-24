import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  a: any;
  b: any;
  val_1 = 0;
  val_2 = 0;
  res_1: any;
  res_2: any;
  res_3: any;
  res_4: any;
  res: any;

  adder = 1;

  list = [0,1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
    this.onOperations('-21','2','+');
    this.onOperations('-21','2','-');
    this.onOperations('-21','2','*');
    this.onOperations('-21','2','/');
  }

  onOperations(x: string, y: string, z: string) {
    // console.log(this.list[7])

    this.a = x;
    this.b = y;

    if (x.charAt(0) == '-' || x.charAt(0) == '+') {
      this.a = x.slice(1);
      console.log(this.a);
    }
    if (y.charAt(0) == '-' || y.charAt(0) == '+') {
      this.b = y.slice(1);
      console.log(this.b);
    }

    if(this.a.length < this.b.length) {
       this.a = '0' + this.a;
      console.log(this.a)
    }
    if (this.b.length < this.a.length) {
      this.b = '0' + this.b;
      console.log(this.b)
    }


    for (let i = this.a.length - 1; i >= 0; i--) {
      const element_1 = this.a[i];
      const element_2 = this.b[i];
      console.log(element_1)
      this.val_1 += this.list[element_1] * this.adder;
      this.val_2 += this.list[element_2] * this.adder;

      this.adder = this.adder * 10;

      console.log(this.val_1)
      console.log(this.val_2)
    }

    switch (z) {
      case '+':
        this.res_1 = this.val_1 + this.val_2;
        console.log(this.res_1)
        break;
      case '-':
        this.res_2 = this.val_1 - this.val_2
        console.log(this.res_2)
        break;
      case '*':
        this.res_3 = this.val_1 * this.val_2
        console.log(this.res_3)
        break;
      case '/':
        this.res_4 = this.val_1 / this.val_2
        console.log(this.res_4)
        break;

      default:
        this.res = 'no Operations'
        console.log(this.res)
        break;
    }
  }

}
