import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictContainerComponent } from './predict-container.component';

describe('PredictContainerComponent', () => {
  let component: PredictContainerComponent;
  let fixture: ComponentFixture<PredictContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
