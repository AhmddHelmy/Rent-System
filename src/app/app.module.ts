import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MessegesComponent } from './messeges/messeges.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MainfilesComponent } from './mainfiles/mainfiles.component';
import { NumbersFilesComponent } from './numbers-files/numbers-files.component';
import { QueriesComponent } from './queries/queries.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemComponent } from './system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    MessegesComponent,
    NotificationsComponent,
    MainfilesComponent,
    NumbersFilesComponent,
    QueriesComponent,
    ReportsComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
