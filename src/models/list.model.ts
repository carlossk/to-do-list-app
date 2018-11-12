import { ItemList } from './lista-item.model';
export class List{
    id:number;
    title: string;
    createdAt: Date;
    doneAt: Date;
    done: boolean;
    items: ItemList[];

    constructor(titulo:string){

        this.title=titulo;

        this.done=false;
        this.createdAt= new Date();
        this.items=[];

        this.id= new Date().getTime();

    }
}
