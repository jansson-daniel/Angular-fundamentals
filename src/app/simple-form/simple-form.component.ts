import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="message" />
      <button (click)="update.emit({ text: message })">Click me!</button>
    </div>`,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    
    * {
      font-family: 'Arial', 'sans-serif';
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
