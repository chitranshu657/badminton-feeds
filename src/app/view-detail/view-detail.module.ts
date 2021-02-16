import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDetailPageRoutingModule } from './view-detail-routing.module';


import { ViewDetailPage } from './view-detail.page';
import { CommonComponentModule } from '../commonComponent.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
//import { TabsPage } from '../tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailPageRoutingModule,
    CommonComponentModule
  ],
  declarations: [ViewDetailPage,SidenavComponent]
})
export class ViewDetailPageModule {}
