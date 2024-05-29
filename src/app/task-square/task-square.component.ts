import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-square',
  standalone: true,
  imports: [],
  templateUrl: './task-square.component.html',
  styleUrl: './task-square.component.css'
})
export class TaskSquareComponent {
  
  unitSizeSquare:number = 20;
  
  @Input() timeUnit:number = 1;
  @Input() timeCompleted:number = 0;

  @ViewChild('rectangulo') rectangulo: ElementRef | undefined;
  @ViewChild('porcentaje') porcentaje: ElementRef | undefined;


  constructor() { }

  ngAfterViewInit() {
    this.updateSquareSize();
  }

  updateSquareSize() {
    if(this.rectangulo && this.rectangulo.nativeElement){
      this.rectangulo.nativeElement.style.width = this.unitSizeSquare * this.timeUnit + 'px';

      if(this.porcentaje && this.porcentaje.nativeElement){
        this.porcentaje.nativeElement.style.width = this.timeCompleted + '%';
      }
    }
  }
}