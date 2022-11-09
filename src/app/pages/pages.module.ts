import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    IndexComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
  ]
})
export class PagesModule { }
