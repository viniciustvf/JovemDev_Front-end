import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../cp-table/medicamento';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {

  public nome!: string;
  public valor!: number;
  
  public medicamento = {
    nome: '',
    valor: 0,
  }
  
  constructor(private service: ServiceService){}
  
  public addItem(){
    const med: Medicamento = new Medicamento(this.nome, this.valor);
    this.nome = '';
    this.valor = 0;
    return this.service.adiciona(med);
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: Medicamento) => {
        this.nome = res.nome;
        this.valor = res.valor;
      }
    });
  }

}
