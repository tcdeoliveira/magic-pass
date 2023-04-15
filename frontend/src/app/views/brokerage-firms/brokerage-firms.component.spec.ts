import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageFirmsComponent } from './brokerage-firms.component';

describe('BrokerageFirmsComponent', () => {
  let component: BrokerageFirmsComponent;
  let fixture: ComponentFixture<BrokerageFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerageFirmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
