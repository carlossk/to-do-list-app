import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';

@Component({
    selector:'page-pendientes',
    templateUrl:'pendientes.component.html'
})
export class PendientesPage{
    constructor(public deseos: DeseosService){

    }
}