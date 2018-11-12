import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending.component';
import { DonePage } from '../done/done.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingPage;
  tab2Root = DonePage;

  constructor() {

  }
}
