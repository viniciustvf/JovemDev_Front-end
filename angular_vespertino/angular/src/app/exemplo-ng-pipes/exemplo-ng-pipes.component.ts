import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-pipes',
  templateUrl: './exemplo-ng-pipes.component.html',
  styleUrls: ['./exemplo-ng-pipes.component.scss']
})
export class ExemploNgPipesComponent {
  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";
  public cpf: string = "";
}


