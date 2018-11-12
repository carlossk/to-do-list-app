import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { AddPage } from "../add/add.component";

@Component({
    selector:'page-pending',
    templateUrl:'pending.component.html'
})
export class PendingPage{
    constructor( private navCtrl: NavController, private alertCtrl: AlertController){

    }

    goToAddList(){

      const prompt= this.alertCtrl.create({
        title: 'New pending list',
        message: 'Title list',
        inputs: [{
          name: 'titleList',
          placeholder: 'Title'
        }],
        buttons: [{
          text: 'Cancel'
        },{
          text: 'Add',
          handler: data=>{
            if(!data.titleList){
                return;
            }
            this.navCtrl.push(AddPage,{
              title: data.titleList
            });
          }
        }]
      });
      prompt.present();
    }
}
