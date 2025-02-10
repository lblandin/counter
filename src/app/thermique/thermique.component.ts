import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
    selector: 'app-thermique',
    templateUrl: './thermique.component.html',
    styleUrl: './thermique.component.scss',
    standalone: false
})
export class ThermiqueComponent {
  @Input() allCount: number = 0;
  
  private _counterService = inject(CounterServiceService);
  
  counter: number = 0

  allCounter(counter: number):void {
    this.counter = counter;
    this._counterService.nextCounterThermicSelected(counter);
  }
}
