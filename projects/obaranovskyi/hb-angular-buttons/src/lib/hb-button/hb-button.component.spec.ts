import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbButtonComponent } from './hb-button.component';

describe('HbButtonComponent', () => {
  let component: HbButtonComponent;
  let fixture: ComponentFixture<HbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
