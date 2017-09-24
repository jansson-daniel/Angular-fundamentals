import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `    
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{ message.text }}</li>
      </ul>
      <app-simple-form
        *ngFor="let message of mail.messages"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)">
      </app-simple-form>
		</div>`,
  styles: [`
    app-simple-form {
      margin-bottom: 10px
    }
  `]
})
export class AppComponent {
  title = 'app works!';

  constructor (
    @Inject('mail') public mail,
  ) {
  }

  onUpdate(id, text) {
    this.mail.update(id, text);
  }
}
