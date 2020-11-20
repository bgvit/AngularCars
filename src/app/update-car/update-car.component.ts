import { Car } from '../car';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  id: number;
  car: Car;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private carService: CarService) { }

  ngOnInit(): void {
    this.car = new Car();
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
  }

  updateCar(){
    this.carService.updateCar(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.goToCarList();
  }

  onSubmit() {
    this.updateCar();
  }

  goToCarList() {
    this.router.navigate(['/cars']);
  }

}
