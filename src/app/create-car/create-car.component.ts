import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = new Car();
  submitted = false;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  recordCar(){
    this.carService.createCar(this.car)
     .subscribe(data => console.log(data), error => console.log(error));
     this.car = new Car();
  }

  goToListCars(){
    this.router.navigate(['/categorias']);
  }

  onSubmit(){
    this.submitted = true;
    this.recordCar();
  }

}
