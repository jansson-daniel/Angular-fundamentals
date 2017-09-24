import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{ message }}
      <input #myInput type="text" [(ngModel)]="message" />
      <button (click)="onClick($event, myInput.value)">Click me!</button>
    </div>`,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  constructor() {}

  ngOnInit() {}

  onClick(event, value) {
    console.log('clicked', event, value);
  }

}
