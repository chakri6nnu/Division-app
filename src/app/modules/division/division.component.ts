import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})

export class DivisionComponent {
  firstValue!: number;
  secoundvalue!: number;
  result!: number;

  ngOnInit():void {}

  onChangeSubmitEvent():void  {
    if (this.isValidFirstValue() && this.isValidSecoundValue()) {
      this.result = this.firstValue / this.secoundvalue;
    } else {
      this.result = 0;
    }
  }

  isValidFirstValue(): boolean {
    return this.firstValue !== null && this.firstValue > -1;
  }

  isValidSecoundValue(): boolean {
    return this.secoundvalue !== null && this.secoundvalue > 0;
  }
}
