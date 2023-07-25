import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdetailComponent } from './reportdetail.component';

describe('ReportdetailComponent', () => {
  let component: ReportdetailComponent;
  let fixture: ComponentFixture<ReportdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportdetailComponent]
    });
    fixture = TestBed.createComponent(ReportdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
