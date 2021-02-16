import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule} from '@angular/forms';
import { TabsPage } from './tabs/tabs.page';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TabsPage
  ],
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    TabsPage
  ]
})
export class CommonComponentModule { }
