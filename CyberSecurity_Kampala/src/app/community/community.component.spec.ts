import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMMUNITYComponent } from './community.component';

describe('COMMUNITYComponent', () => {
  let component: COMMUNITYComponent;
  let fixture: ComponentFixture<COMMUNITYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [COMMUNITYComponent]
    });
    fixture = TestBed.createComponent(COMMUNITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
