import { Component, Input } from "@angular/core";
import { ToDoListService } from "../services/to-do-list.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { List } from "../models";
import { AddPage } from "../pages/add/add.component";

@Component({
    selector:'app-list',
    templateUrl:'list.component.html'
})
export class ListComponent{
  @Input() done: boolean= false;
  constructor(public toDoList:ToDoListService,private navCtrl:NavController, private alertCtrl:AlertController){


  }
  selectedList(list:List){
    console.log(list);
      this.navCtrl.push(AddPage,{
        title: list.title,
        list:list
      });
  }
  deleteList(id){

    this.toDoList.deleteList(id);
  }
  editList(list:List,sliding: ItemSliding){
    sliding.close();
      const prompt= this.alertCtrl.create({
        title: 'Edit title list',
        inputs: [{
          name: 'titleList',
          placeholder: 'Title',
          value: list.title
        }],
        buttons: [{
          text: 'Cancel'
        },{
          text: 'Update',
          handler: data=>{
            if(!data.titleList){
                return;
            }
            list.title=data.titleList;
            this.toDoList.saveStorage();

          }
        }]
      });
      prompt.present();
  }
}
