import { Component, Input } from '@angular/core';
import { TaskSquareComponent } from '../task-square/task-square.component';

@Component({
  selector: 'app-task-row',
  standalone: true,
  imports: [TaskSquareComponent],
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.css'
})
export class TaskRowComponent {

    //Data for the square
    @Input() task:any = {};

}
