import { Injectable } from "@angular/core";
import { List } from '../models';

@Injectable()
export class ToDoListService{
    list: List[]=[];
    constructor(){

      this.loadStorage();
    }
    addList(list:List){
         this.list.push(list);
         this.saveStorage();
    }
    deleteList(id){

      this.list= this.list.filter(list=>{
        return list.id!==id;
      });

      this.saveStorage();
    }
    saveStorage(){

      localStorage.setItem('data',JSON.stringify(this.list));
    }
    loadStorage(){

     this.list= localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')):[];
    }
}
