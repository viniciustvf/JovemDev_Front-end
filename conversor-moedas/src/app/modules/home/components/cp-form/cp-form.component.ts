import { Component } from '@angular/core';
import { Moeda } from '../../models/moeda';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {

  constructor(private http: HttpClient) {}

  public moeda!: Moeda;
  public valor: number = 0;

  getMoedas(): Observable<any> {
    let url = 'https://api.hgbrasil.com/finance?format=json-cors&key=f807b61d'
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }

  public converteMoeda() {
    this.getMoedas().subscribe((moedas) => {
      const realDolar = (this.valor / moedas.USD.buy).toFixed(2);
      const realEuro = (this.valor / moedas.EUR.buy).toFixed(2);
      const realPeso = (this.valor / moedas.ARS.buy).toFixed(2);

      this.moeda = {
        dolar: Number(realDolar),
        euro: Number(realEuro),
        peso: Number(realPeso)
      }
    });
  }
  


  
}
