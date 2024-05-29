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
  tasks:any = [
    {
      timeUnit: 10,
      timeCompleted: 0,
      previousLargestTask: -1,
      unitsPreviousLargestTaskw: 0

    },
    {
      timeUnit: 5,
      timeCompleted: 10,
      previousLargestTask: 0,
      unitsPreviousLargestTasks: 10

    },
    {
      timeUnit: 15,
      timeCompleted: 100,
      previousLargestTask: 1,
      unitsPreviousLargestTasks: 10 + 5 
    },
    {
      timeUnit: 20,
      timeCompleted: 50,
      previousLargestTask: -1,
      unitsPreviousLargestTasks: 0

    }
  ];
}
