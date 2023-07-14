import { Component } from '@angular/core';
import { Endereco } from '../../models/endereco';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private http: HttpClient) {}

  public endereco!: Endereco;
  public cep: string = '';

  getData(): Observable<any> {
    let url = `https://viacep.com.br/ws/${this.cep}/json/`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscarEndereco() {
    this.getData().subscribe((data) => {
      this.endereco = {
        rua: data['logradouro'],
        bairro: data['bairro'],
        cidade: data['localidade'],
        estado: data['uf'],
        cep: data['cep'],
      };
    });
  }

}
