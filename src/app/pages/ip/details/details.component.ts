import {Component, Input} from '@angular/core';
import {IP} from "../ip-model/ip";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() data: IP | undefined;
}