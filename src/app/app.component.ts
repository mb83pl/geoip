import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = true;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('GeoIP - localize your IP address on Map!');
  }
}
