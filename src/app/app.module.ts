import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';

import { ChartsModule } from 'ng2-charts';
import { MachesComponent } from './maches/maches.component';

import { BigGrapComponent } from './big-grap/big-grap.component';
import { GrapDetalsComponent } from './grap-detals/grap-detals.component';


@NgModule({
  declarations: [
    AppComponent,

    SidebarComponent,
   
    MachesComponent,
  
    BigGrapComponent,
    GrapDetalsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
