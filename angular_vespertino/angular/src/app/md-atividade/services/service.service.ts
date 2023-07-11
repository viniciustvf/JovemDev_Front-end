import { EventEmitter, Injectable } from '@angular/core';
import { Medicamento } from '../cp-table/medicamento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public emitEvent = new EventEmitter();

  private medicamentos: Array<Medicamento> = [];

  public getMedicamentos(){
    return this.medicamentos;
  }

  public adiciona(medicamento: Medicamento){
    this.medicamentos.push(medicamento);
    this.emitEvent.emit(medicamento);
  }
}
