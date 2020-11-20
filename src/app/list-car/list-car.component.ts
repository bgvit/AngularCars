import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  
  cars: Observable<Car[]>

  constructor(private carService: CarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getListCars();
  }

  getListCars() {
    this.cars = this.carService.getCarList();
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id)
    .subscribe(
      data => {
        this.refreshCarList();
      },
      error => console.log(error));
  }

  refreshCarList(){
    this.cars = this.carService.getCarList();
  }

  carDetail(id: number) {
    this.router.navigate(['detail', id]);
  }

  updateCar(id: number){
    this.router.navigate(['updateCar', id]);
  }
}
