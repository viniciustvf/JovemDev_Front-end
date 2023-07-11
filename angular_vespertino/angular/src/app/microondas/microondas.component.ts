import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public numeros: any = '';
  
  public minutos: any = '';
  public segundos: any = '';
 
  public intervalo!: any;
  public executando: boolean = false;

  
  
  public ligar(){

    this.intervalo = setInterval(() =>{

      this.executando = true;

      this.minutos = this.numeros.substring(0, 2);
      this.segundos = this.numeros.substring(2, 4);
  
      let segundosNum = Number(this.segundos);
      let minutosNum = Number(this.minutos);
  
      if(segundosNum == 0 && minutosNum == 0){
        segundosNum += 30;
      }
      
      if (segundosNum > 59) {
        minutosNum += Math.floor(segundosNum / 60);
        segundosNum %= 60;
      }
      
      if (segundosNum < 1) {
        minutosNum -= 1;
        segundosNum = 60;
      }
  
      this.minutos = minutosNum.toString().padStart(2, '0');
      this.segundos = segundosNum.toString().padStart(2, '0');
  
      this.numeros = this.minutos + (this.segundos - 1);

      if (minutosNum < 0 || segundosNum < 0) {
        clearInterval(this.intervalo);
      }


     }, 1000);
  }

  public cancelar(){
    clearInterval(this.intervalo);
    this.numeros = '';
  }
  
  atualizaTempo(){
    if (this.numeros.length > 4) {
      this.numeros = this.numeros.slice(-4);
    }
  }

  public apertaBotao(botao: string){
      if(this.executando == true){
        this.segundos = (Number(this.segundos) + Number(botao)).toString().padStart(2, '0');
        this.numeros = this.minutos + this.segundos;
      } else {
        this.numeros += botao;
        this.atualizaTempo();
      } 
    }

    public formataTempo(tempo: number): number{
      if (tempo < 10) {
        return Number('0' + tempo);
      }
      return tempo;
    }









  }








