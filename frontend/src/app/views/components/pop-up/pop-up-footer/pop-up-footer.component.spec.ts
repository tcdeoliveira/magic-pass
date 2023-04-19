import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFooterComponent } from './pop-up-footer.component';

describe('PopUpFooterComponent', () => {
  let component: PopUpFooterComponent;
  let fixture: ComponentFixture<PopUpFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
