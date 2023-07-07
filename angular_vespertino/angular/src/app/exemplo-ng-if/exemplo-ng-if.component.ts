import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-if',
  templateUrl: './exemplo-ng-if.component.html',
  styleUrls: ['./exemplo-ng-if.component.scss']
})
export class ExemploNgIfComponent {
  
  gato:boolean = false;
  cachorro:boolean = false;
  papagaio:boolean = false;
  cavalo:boolean = false;


  public clickGato(){
    this.gato = !this.gato;
  }
  public clickCachorro(){
    this.cachorro = !this.cachorro;
  }
  public clickPapagaio(){
    this.papagaio = !this.papagaio;
  }
  public clickCavalo(){
    this.cavalo = !this.cavalo;
  }

  
}
