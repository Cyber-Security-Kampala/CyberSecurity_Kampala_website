import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRAININGComponent } from './training.component';

describe('TRAININGComponent', () => {
  let component: TRAININGComponent;
  let fixture: ComponentFixture<TRAININGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TRAININGComponent]
    });
    fixture = TestBed.createComponent(TRAININGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
