import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-style',
  templateUrl: './exemplo-ng-style.component.html',
  styleUrls: ['./exemplo-ng-style.component.scss']
})
export class ExemploNgStyleComponent {

  public respostaInput!: number;
  public resposta!: number;




  public isCorrectAnswer(): boolean {
    if(this.resposta == 4){
      return true;
    }
    return false;
  }

  public enviarResposta(){
    this.resposta = this.respostaInput;
    this.respostaInput!;
  }

  public validateFields(){
    if(this.resposta == undefined){
      return true;
    }
    return false;
  }

}