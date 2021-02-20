import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbAngularButtonsComponent } from './hb-angular-buttons.component';

describe('HbAngularButtonsComponent', () => {
  let component: HbAngularButtonsComponent;
  let fixture: ComponentFixture<HbAngularButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbAngularButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbAngularButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
