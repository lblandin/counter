import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
    selector: 'app-electric',
    templateUrl: './electric.component.html',
    styleUrl: './electric.component.scss',
    standalone: false
})
export class ElectricComponent {
  @Input() allCount: number = 0;
  private _counterService = inject(CounterServiceService)

  counter: number = 0;

  allCounter(counter: number):void {
    this.counter = counter;
    this._counterService.nextCounterElectricSelected(counter);
  }
}
