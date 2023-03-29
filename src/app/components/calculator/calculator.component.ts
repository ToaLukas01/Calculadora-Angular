import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result:number = 0;
  n1: number = 0;
  n2: number = 0;

  sum(){
    this.result = this.n1 + this.n2
  }

  substact(){
    this.result = this.n1 - this.n2
  }

  mult(){
    this.result = this.n1 * this.n2
  }

  div(){
    this.result = this.n1 / this.n2
  }

}
