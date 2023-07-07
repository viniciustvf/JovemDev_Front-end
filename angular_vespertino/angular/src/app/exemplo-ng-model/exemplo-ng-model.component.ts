import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-model',
  templateUrl: './exemplo-ng-model.component.html',
  styleUrls: ['./exemplo-ng-model.component.scss']
})
export class ExemploNgModelComponent {
  public nome: string = "";
  public nomes: Array<{ nome: string }> = [];

  adicionaNome(){
    if(this.nome != 'X'){
      this.nomes.push({nome: this.nome});
      this.nome = "";
    }
  }
}
