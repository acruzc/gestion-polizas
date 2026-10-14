import { Pipe, PipeTransform } from '@angular/core';
import { Policy } from '../models/models';

@Pipe({
  name: 'filterByStatusPipe'
})
export class FilterByStatusPipePipe implements PipeTransform {

  transform(polizas: Policy[], estado: string): Policy[] {
    if (!polizas || !estado || estado === 'todos') {
      return polizas;
    }
    return polizas.filter(poliza => poliza.status.toLowerCase() === estado.toLowerCase());
  }

}
