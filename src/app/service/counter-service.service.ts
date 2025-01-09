import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  private counterElectricSelected$ = new BehaviorSubject<number>(0);
  private counterThermicSelected$ = new BehaviorSubject<number>(0);
  private counter$ = new BehaviorSubject<number>(0);


  // Counter Electric

  getCounterElectricSelectedObs(): Observable<number> {
    return this.counterElectricSelected$.asObservable();
  }

  nextCounterElectricSelected(counterSelected: number): void {
    this.counterElectricSelected$.next(counterSelected);
  }

  getCounterElectricSelectedValue(): number {
    return this.counterElectricSelected$.getValue();
  }

  // Counter Thermique 

  getCounterThermicSelectedObs(): Observable<number> {
    return this.counterThermicSelected$.asObservable();
  }

  nextCounterThermicSelected(counterSelected: number): void {
    this.counterThermicSelected$.next(counterSelected);
  }

  getCounterThermicSelectedValue(): number {
    return this.counterThermicSelected$.getValue();
  }

  // Counter General 

  getCounterObs(): Observable<number> {
    return this.counter$.asObservable();
  }

  nextCounter(counterSelected: number): void {
    this.counter$.next(counterSelected);
  }

  getCounterValue(): number {
    return this.counter$.getValue();
  }
}
