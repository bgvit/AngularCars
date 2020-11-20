import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    DetailsCarComponent,
    ListCarComponent,
    UpdateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
