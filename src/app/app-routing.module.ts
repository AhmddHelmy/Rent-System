import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MessegesComponent } from './messeges/messeges.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QueriesComponent } from './queries/queries.component';
import { ReportsComponent } from './reports/reports.component';
import { NumbersFilesComponent } from './numbers-files/numbers-files.component';
import { MainfilesComponent } from './mainfiles/mainfiles.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'messeges', component:MessegesComponent },
  { path: 'notifications', component:NotificationsComponent },
  { path: 'queries' , component: QueriesComponent},
  { path: 'reports' , component: ReportsComponent},
  { path: 'numbers-files' , component: NumbersFilesComponent},
  { path: 'main-files' , component: MainfilesComponent},
  { path: 'system' , component: SystemComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
