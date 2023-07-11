import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-for',
  templateUrl: './exemplo-ng-for.component.html',
  styleUrls: ['./exemplo-ng-for.component.scss']
})
export class ExemploNgForComponent {
  
  numero!: number;

  public listaNumeros: any = [

  ];

  public addNumero(){
    if(this.numero != 0 && this.listaNumeros.length < 10) {
      this.listaNumeros.push({numero: this.numero});
    } 
  }

  public removeNumero(){
    this.listaNumeros.pop();
  }

}

