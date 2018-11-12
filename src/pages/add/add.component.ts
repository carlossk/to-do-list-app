import { Component } from "@angular/core";
import { ToDoListService } from '../../services/to-do-list.service';
import { List, ItemList } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
    selector:'page-add',
    templateUrl:'add.component.html'
})
export class AddPage{
    nameItem:string='';
    list:List;
    constructor(public toDoList: ToDoListService, private navParams: NavParams){
      const title= this.navParams.get('title');

      if(this.navParams.get('list')){
        this.list=this.navParams.get('list');
      }else{
        this.list= new List(title)  ;
        this.toDoList.addList(this.list);
      }
    }
    updateStatus(item){
      item.done = !item.done;

      const missingItems =  this.list.items.filter(item=>{
        return !item.done;
      }).length;
      if(missingItems===0){
        this.list.done=true;
        this.list.doneAt=new Date();
      }else{
        this.list.done=false;
        this.list.doneAt=null;
      }
      this.toDoList.saveStorage();
    }
    addItem(){
      if(!this.nameItem){
        return;
      }
      const newItem= new ItemList(this.nameItem);
      this.list.items.push(newItem);
      this.nameItem='';
      this.toDoList.saveStorage();
    }
    deleteItem(key){
      this.list.items.splice(key,1);
      this.toDoList.saveStorage();

    }
}
