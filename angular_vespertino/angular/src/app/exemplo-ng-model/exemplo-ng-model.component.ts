import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-model',
  templateUrl: './exemplo-ng-model.component.html',
  styleUrls: ['./exemplo-ng-model.component.scss']
})
export class ExemploNgModelComponent {

  public meses!: number;
  public valorTotal!: number;
  public juros!: number;
  
  public valorFinal!: number;

  
  public calcula() {
    const A = this.valorTotal;
    const B = this.juros / 100;
    const C = this.meses;
  
    const total = A * B * C;
  
    this.valorFinal = A + total;
  }

}