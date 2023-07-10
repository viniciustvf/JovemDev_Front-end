import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public tempoTotal: string = "";

  public adicionaNumero(tempo: string){
    const tempoNum = Number(tempo);
    const tempoAtual = Number(this.tempoTotal);
  
    this.tempoTotal = String(tempoNum + tempoAtual);

  }
  
  public adicionaMinuto(tempo: string){
    


  }



}
