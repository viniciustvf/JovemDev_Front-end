import { EventEmitter, Injectable } from '@angular/core';
import { Medicamento } from '../cp-table/medicamento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public emitEvent = new EventEmitter();

  private medicamentos: Array<Medicamento> = [];
  
  private medicamentoSelecionado!: Medicamento;

  
  public getMedicamentos(){
    return this.medicamentos;
  }
  
  public medSelecionado(med: Medicamento){
    this.medicamentoSelecionado = med;
    this.emitEvent.emit(this.medicamentoSelecionado);
  }

  public adiciona(medicamento: Medicamento){
    this.medicamentos.push(medicamento);
    this.emitEvent.emit(this.medicamentos.length);
  }
}
