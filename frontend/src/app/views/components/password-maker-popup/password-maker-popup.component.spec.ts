import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMakerPopupComponent } from './password-maker-popup.component';

describe('PasswordMakerPopupComponent', () => {
  let component: PasswordMakerPopupComponent;
  let fixture: ComponentFixture<PasswordMakerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordMakerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordMakerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
