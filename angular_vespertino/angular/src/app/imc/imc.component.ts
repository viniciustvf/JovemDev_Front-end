import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})

export class ImcComponent {

  public peso!: number;
  public altura!: number;  
  public nome!: string; 
  public sexo: string = ""; 
  public avaliacao: number = 0;  
  public isPesoIdeal: string = ""; 

  public calcula(): Number{
    let pes = this.peso;
    let alt = this.altura;
    let nome = this.nome;
    let sexo = this.sexo;
    
    this.avaliacao = pes / (alt * 2);

    
    return this.avaliacao;

  }

  public isImcCorrect(): boolean {
    if(this.avaliacao < 25 && this.avaliacao > 18){
      return true;
    }
    return false;
  }

  public urlImgImc(): string{
    if(this.isImcCorrect()){
      return "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_1280.png";
    } else {
      return "https://i.pinimg.com/originals/26/1d/79/261d79eba10658c0dfb9da61c5b28755.png";
    }
  }

  public isPesoIdealImc(){
    if(this.isImcCorrect()){
      this.isPesoIdeal = "ideal";
    } else {
      this.isPesoIdeal = "não ideal";
    }
  }

}

