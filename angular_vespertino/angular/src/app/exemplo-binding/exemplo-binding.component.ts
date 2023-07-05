import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "Joãozinho";
  
  public incrementa5(){
    this.n1 += 5;
    this.n2 += 5;
  }

  public decrementa5(){
    this.n1 -= 5;
    this.n2 -= 5;
  }
  
  public urlImg(): string{
    if(this.n1 + this.n2 > 50 ){
      return "https://cdn.pixabay.com/photo/2020/12/27/20/25/smile-5865209_960_720.png";
    } else {
      return "https://images.emojiterra.com/google/android-12l/512px/1f641.png";
    }
  }





}
