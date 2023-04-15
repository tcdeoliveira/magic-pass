import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrollTopComponent } from './schroll-top.component';

describe('SchrollTopComponent', () => {
  let component: SchrollTopComponent;
  let fixture: ComponentFixture<SchrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchrollTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
