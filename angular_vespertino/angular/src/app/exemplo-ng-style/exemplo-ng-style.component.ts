import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-style',
  templateUrl: './exemplo-ng-style.component.html',
  styleUrls: ['./exemplo-ng-style.component.scss']
})
export class ExemploNgStyleComponent {
  
  public largura : number = 100;
  public larguraStr : string = "100px"

  aumenta(){
    this.largura += 50;
    this.larguraStr = this.largura+"px";
  }

  diminui(){
    this.largura -= 50;
    this.larguraStr = this.largura+"px";
  }

}
