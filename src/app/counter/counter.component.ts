import { Component, DestroyRef, EventEmitter, inject, Output } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';
import { combineLatest } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Output() onCounter = new EventEmitter<number>();

  public destroyRef = inject(DestroyRef);

  private _counterService = inject(CounterServiceService)
  
  counter = 0;
  counterTotal = 0;
  counterElectric = this._counterService.getCounterElectricSelectedObs();
  counterThermic = this._counterService.getCounterThermicSelectedObs();

  ngOnInit(): void {
    combineLatest([this.counterElectric, this.counterThermic]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([electric, thermic]) =>
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
