import { Car } from './../car';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {

  id: number;
  car : Car;

  constructor(private route: ActivatedRoute, private router: Router,
    private carService: CarService) { }

  ngOnInit() {
    this.car = new Car();
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data);
        this.car = data;
      }, error => console.log(error))
  }

  listCars() {
    this.router.navigate(['cars']);
  }

}
