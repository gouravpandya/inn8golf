import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEventComponent } from './course-event.component';

describe('CourseEventComponent', () => {
  let component: CourseEventComponent;
  let fixture: ComponentFixture<CourseEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
