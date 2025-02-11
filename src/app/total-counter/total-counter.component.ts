import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
  selector: 'app-total-counter',
  imports: [AsyncPipe],
  templateUrl: './total-counter.component.html',
  styleUrl: './total-counter.component.scss'
})
export class TotalCounterComponent {
  private _counterService = inject(CounterServiceService)

  allCounter = this._counterService.getCounterObs();
}
