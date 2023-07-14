import { Component, Input } from '@angular/core';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() public endereco!: Endereco;
  
}
