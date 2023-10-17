import { Component } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  
  value1:any;
  value2:any;
  
  result:any;

  sum() {
    this.result = this.value1 + this.value2
  }
}
