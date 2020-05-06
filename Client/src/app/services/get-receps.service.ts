import { Injectable } from '@angular/core';
import { DishModel } from '../models/dish-model';

@Injectable({
  providedIn: 'root'
})
export class GetRecepsService {
  public getAllRecepsAsync(): Promise<DishModel[]> {
    return new Promise<DishModel[]>((resolve, reject) => {
    fetch("http://localhost:3000/api/dishes")
    .then(response => response.json())
    .then(dishes => resolve(dishes))
    .catch(err => reject(err));
    });
    }
  constructor() { }
}
