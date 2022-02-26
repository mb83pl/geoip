import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;

  links = [
    {path: '/', title: 'Home'},
    {path: '/ip', title: 'Check Your IP'}
  ]

}
