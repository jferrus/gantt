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

}
