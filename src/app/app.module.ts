import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,//عشان انا بستخدم المتصفح فضروري يكون النوديول هادا
    AppRoutingModule,
    FormsModule
    //two way binding لحتى استخدم ال 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
