import { Injectable } from '@angular/core';
import { RecepModel } from '../models/recep-model';

@Injectable({
  providedIn: 'root'
})
export class GetRecepsService {
  constructor() { }
  public getAllRecepsAsync(): Promise<RecepModel[]> {
    return new Promise<RecepModel[]>((resolve, reject) => {
        fetch("http://localhost:3000/api/receps")
            .then(response => response.json())
            .then(receps => resolve(receps))
            .catch(err => reject(err));
    });
}
}
