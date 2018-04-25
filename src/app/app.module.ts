import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for routing configuration
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const appRoutes:Routes=[
  {path:'home' ,component:HomeComponent},
  {path:'home/:id' ,component:HomeComponent},
  {path:'product',component:ProductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
