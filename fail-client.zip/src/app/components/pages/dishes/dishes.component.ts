import { Component, OnInit } from '@angular/core';
import { DishModel } from 'src/app/models/dish-model';
import { GetDishesService } from 'src/app/services/get-dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  public dishes: DishModel[];
  constructor(private myDishService: GetDishesService) { }
  async ngOnInit() {
    try {
        this.dishes = await this.myDishService.getAllDishesAsync();
        console.log(this.dishes);
    }
    catch (err) {
        alert("Error: " + err.message);
    }
}
}
