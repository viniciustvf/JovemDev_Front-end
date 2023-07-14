import { Component, Input } from '@angular/core';
import { Moeda } from '../../models/moeda';

@Component({
  selector: 'cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {

  @Input() public moeda!: Moeda;

}
