import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
