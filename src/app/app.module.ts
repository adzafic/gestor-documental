import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FilesService } from "./services/files.service";
import { FileComponent } from './components/file/file.component';

// creamos las rutas
const appRoutes: Routes = [
  { path:'',component: DashboardComponent},
  { path:'file/:id',component: FileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
