import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecepModel } from 'src/app/models/recep-model';
import { DishModel } from 'src/app/models/dish-model';
@Injectable({
  providedIn: 'root'
})
export class RecepsService {
  constructor(private http: HttpClient) { }
  public getAllReceps(): Observable<RecepModel[]> {
    return this.http.get<RecepModel[]>("http://localhost:3000/api/receps");
}
public getAllDishes(): Observable<DishModel[]> {
  return this.http.get<DishModel[]>("http://localhost:3000/api/dishes");
}
public addRecep(recep: RecepModel): Observable<RecepModel> {
  return this.http.post<RecepModel>("http://localhost:3000/api/receps", recep);
}
}