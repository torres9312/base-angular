import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/material/material.module';
import { LoadingPageComponent } from './shared/loading-page/loading-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [
    PagesModule,
    AdminModule,
    LoadingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
