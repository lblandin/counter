import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCounterComponent } from './total-counter.component';

describe('TotalCounterComponent', () => {
  let component: TotalCounterComponent;
  let fixture: ComponentFixture<TotalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
