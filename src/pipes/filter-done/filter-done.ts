import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

/**
 * Generated class for the FilterDonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterDone',
  pure:false
})
export class FilterDonePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: List[],done: boolean) {
    return listas.filter(list=>{
      return list.done===done;
    })
  }
}
