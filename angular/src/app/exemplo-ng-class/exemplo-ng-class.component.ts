import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-class',
  templateUrl: './exemplo-ng-class.component.html',
  styleUrls: ['./exemplo-ng-class.component.scss']
})
export class ExemploNgClassComponent implements OnInit{

  public valor: number = 0;

   ngOnInit(): void {
       setInterval(() =>{
        this.valor = this.valor + 1;
       }, 1000);
   }

}
