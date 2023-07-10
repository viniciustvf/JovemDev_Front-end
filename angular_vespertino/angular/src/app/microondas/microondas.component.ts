import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public minutos: any = '';
  public segundos: any = '';
  public intervalo!: any;
  
  public executando: boolean = false;

  public numeros: any = '';
  
  public ligar(){
    if(this.segundos == 0 && this.minutos == 0){
      this.segundos = 30;
      this.minutos = 0 + '0';
    }
    this.intervalo = setInterval(() =>{

      this.executando = true;


      
      if(this.segundos > 60){
        this.minutos += 1;
        this.segundos = this.segundos - 60;
      }
      
      this.segundos  -= 1;

      if(this.segundos < 0){
        this.segundos = 59;
        this.minutos -= 1;
      }

     }, 1000);
  }

  public cancelar(){
    clearInterval(this.intervalo);
    this.minutos = '';
    this.segundos = '';
  }
  
  public apertaBotao(botao: string){
    if (this.segundos.length < 2) {
      this.segundos += botao;
    } else {
      this.minutos += this.segundos;
      this.segundos = botao;
    }




  }





}


