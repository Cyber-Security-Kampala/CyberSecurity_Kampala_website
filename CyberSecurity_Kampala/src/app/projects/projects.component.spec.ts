import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROJECTSComponent } from './projects.component';

describe('PROJECTSComponent', () => {
  let component: PROJECTSComponent;
  let fixture: ComponentFixture<PROJECTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PROJECTSComponent]
    });
    fixture = TestBed.createComponent(PROJECTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
