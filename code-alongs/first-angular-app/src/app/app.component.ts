import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  hideTitle = true;

  returnTitle() {
    return this.title;
  }

  toggleTitle() {
    this.hideTitle = !this.hideTitle;
  }
}
