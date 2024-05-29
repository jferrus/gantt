import { Component } from '@angular/core';
import { TaskRowComponent } from '../task-row/task-row.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TaskRowComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  tasks = [
    {
      timeUnit: 10,
      timeCompleted: 0
    },
    {
      timeUnit: 5,
      timeCompleted: 10
    },
    {
      timeUnit: 15,
      timeCompleted: 100
    },
    {
      timeUnit: 20,
      timeCompleted: 50
    }
  ];
}
