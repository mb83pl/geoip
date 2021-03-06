import { Component, Input } from '@angular/core';
import { IP } from 'src/app/pages/ip/ip-model/ip';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  @Input() data!: IP;

  getFlag = () => {
    const flagFile = this.data.country_tld.replace('.', '');
    if (flagFile == 'uk') {
      return `https://flagcdn.com/40x30/gb.png`;
    }
    return `https://flagcdn.com/40x30/${flagFile}.png`;
  };
}
