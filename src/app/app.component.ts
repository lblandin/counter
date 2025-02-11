import { Component, inject } from '@angular/core';
import { CounterServiceService } from './service/counter-service.service';
import { Observable } from 'rxjs';
import { ThermiqueComponent } from './thermique/thermique.component';
import { ElectricComponent } from './electric/electric.component';
import { AsyncPipe } from '@angular/common';
import { TotalCounterComponent } from './total-counter/total-counter.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [ThermiqueComponent, ElectricComponent, TotalCounterComponent]
})
export class AppComponent {
  private _counterService = inject(CounterServiceService)
  
  countElectric = this._counterService.getCounterElectricSelectedValue();
  countThermic = this._counterService.getCounterThermicSelectedValue();
}
