import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `    
    <div>
			<app-simple-form></app-simple-form>
			{{ mail.message }}
      <hr />
      {{ api }}
		</div>`
})
export class AppComponent {
  title = 'app works!';

  constructor (
    @Inject('mail') public mail,
    @Inject('api') public api
  ) {


  }
}
