<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { CounterServiceService } from './service/counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _counterService = inject(CounterServiceService)
  
  countElectric = 0;
  countThermic = 0;
  allCounter = 0;


  ngOnInit() {
    this._counterService.getCounterElectricSelectedObs().pipe().subscribe((counterElectric: number) => this.countElectric = counterElectric)
    this._counterService.getCounterThermicSelectedObs().pipe().subscribe((counterThermic: number) => this.countThermic = counterThermic)
    this._counterService.getCounterObs().pipe().subscribe((counter: number) => this.allCounter = counter)
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter';
}
>>>>>>> 77d450f (initial commit)
