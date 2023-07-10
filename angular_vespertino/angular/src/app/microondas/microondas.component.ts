import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  // public segundo1: number = 0;
  // public segundo2: number = 0;

  // public minuto1: number = 0;
  // public minuto2: number = 0;
  
  
  public minutos: number = 0;
  public segundos: number = 0;
  
  public ligar(){
    setInterval(() =>{
      
      if(this.segundos == 0 && this.minutos == 0){
        this.segundos = 30;
      }
      
      if(this.segundos > 60){
        this.minutos = 1;
      }
      
      this.segundos  -= 1;

      if(this.segundos < 0){
        this.segundos = 60;
        this.minutos -= 1;
      }

     }, 1000);
  }

  
  
  
  
  public apertaBotao(botao: number){
    if(botao + this.segundos > 60){
      this.minutos += botao % 60;
      this.segundos = 0;
    } else {
      this.segundos += botao;
    } 
    
    if(botao == 60){
      this.minutos += 1;
      this.segundos = 0;
    } 
    
    

  }
  







  
}
  
  

