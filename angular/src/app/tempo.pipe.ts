import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempo'
})
export class TempoPipe implements PipeTransform {

  transform(tempo: string): string {
    if (tempo && tempo.length >= 4) {
      const horas = tempo.substring(0, 2);
      const minutos = tempo.substring(2, 4);
      return `${horas}:${minutos}`;
    }
    
    return tempo;
  }

}
