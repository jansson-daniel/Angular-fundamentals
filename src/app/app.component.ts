import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `    
    <div>
			<app-simple-form></app-simple-form>
			{{ mail.message }}
		</div>`
})
export class AppComponent {
  title = 'app works!';

  constructor (public mail: MailService) {
  }
}
