import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTestComponent } from './buttons-test.component';

describe('ButtonsTestComponent', () => {
  let component: ButtonsTestComponent;
  let fixture: ComponentFixture<ButtonsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
