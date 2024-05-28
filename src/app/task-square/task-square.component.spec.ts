import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSquareComponent } from './task-square.component';

describe('TaskSquareComponent', () => {
  let component: TaskSquareComponent;
  let fixture: ComponentFixture<TaskSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
