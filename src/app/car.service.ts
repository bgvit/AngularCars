import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = 'http://localhost:8080/cars';
  
  constructor(private http: HttpClient) { }
  
  getCarList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  getCar(id: number) : Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createCar(car : Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, car);
  }

  deleteCar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  updateCar(id : number, value: any): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

}
