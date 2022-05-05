import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  author: string = 'Marcin Butora';
  dateInfo: Date = new Date('2022-05-05 19:47');
}
