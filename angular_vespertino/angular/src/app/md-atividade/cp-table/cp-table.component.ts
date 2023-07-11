import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from './medicamento';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {

  public medicamentos: Array<Medicamento> = [];
  
  constructor(private service: ServiceService){}
  
  ngOnInit(): void {
    this.medicamentos = this.service.getMedicamentos();
  }

}
