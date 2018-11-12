import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { PendingPage } from '../pages/pending/pending.component';
import { ListComponent } from '../components/list.component';
import { AddPage } from '../pages/add/add.component';
import { DonePage } from '../pages/done/done.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ToDoListService } from '../services/to-do-list.service';
import { FilterDonePipe } from '../pipes/filter-done/filter-done';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    DonePage,
    AddPage,
    FilterDonePipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    DonePage,
    AddPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToDoListService
  ]
})
export class AppModule {}
