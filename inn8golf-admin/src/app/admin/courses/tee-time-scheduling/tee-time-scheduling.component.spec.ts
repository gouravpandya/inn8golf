import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeTimeSchedulingComponent } from './tee-time-scheduling.component';

describe('TeeTimeSchedulingComponent', () => {
  let component: TeeTimeSchedulingComponent;
  let fixture: ComponentFixture<TeeTimeSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeeTimeSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeeTimeSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
