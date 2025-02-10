import { Component, inject } from '@angular/core';
import { CounterServiceService } from './service/counter-service.service';
import { Observable } from 'rxjs';
import { ThermiqueComponent } from './thermique/thermique.component';
import { ElectricComponent } from './electric/electric.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [ThermiqueComponent, ElectricComponent, AsyncPipe]
})
export class AppComponent {
  private _counterService = inject(CounterServiceService)
  
  countElectric = 0;
  countThermic = 0;
  allCounter$ = new Observable<number>();


  ngOnInit() {
    this.allCounter$ = this._counterService.getCounterObs();
  }
}
