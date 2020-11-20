import { DetailsCarComponent } from './details-car/details-car.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarComponent } from './list-car/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent} from './update-car/update-car.component';

const routes: Routes = [
  {path: 'cars', component: ListCarComponent},
  {path: 'addCar', component: CreateCarComponent},
  {path: 'detail/:id', component: DetailsCarComponent},
  {path: 'updateCar/:id', component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
