import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
    standalone: false
})
export class CounterComponent {
  @Output() onCounter = new EventEmitter<number>();

  private _counterService = inject(CounterServiceService)
  
  counter = 0;
  counterTotal = 0;
  counterElectric = this._counterService.getCounterElectricSelectedObs();
  counterThermic = this._counterService.getCounterThermicSelectedObs();

  ngOnInit(): void {
    combineLatest(this.counterElectric, this.counterThermic).pipe().subscribe(([electric, thermic]) =>
    {
      this.counterTotal = electric + thermic;
      console.log('✌️this.counter --->', this.counterTotal);
    }
  )}

  increaseCounter(counter: number) {
    this.counter = counter;
    this.counter++
    this.onCounter.emit(this.counter);
  }

  decreaseCounter(counter: number) {
    this.counter = counter;
    this.counter--
    this.onCounter.emit(this.counter);
  }
}
