import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `    
    <div>
			<ul>
        <li *ngFor="let message of mail.messages">{{ message }}</li>
      </ul>
		</div>`
})
export class AppComponent {
  title = 'app works!';

  constructor (
    @Inject('mail') public mail,
  ) {


  }
}
