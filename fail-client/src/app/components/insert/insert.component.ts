import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecepModel } from 'src/app/models/recep-model';
import { DishModel } from 'src/app/models/dish-model';
import { GetRecepsService } from 'src/app/services/get-receps.service';
// import { RecepsService } from 'src/app/services/receps.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {


    public dishes: DishModel[];
    public recep = new RecepModel();

    constructor(private myRecepsService: GetRecepsService, private router: Router) { }

    ngOnInit() {
    //     this.myRecepsService
    //         .getAllRecepsAsync()
    //         .subscribe(recep => this.recep = recep,
    //             err => alert(err.message));
    // }

  //   public sendRecep(): void {
  //     // const d = new Date();
  //     // this.recep.date = d.toDateString();
  //     this.myRecepsService
  //         .addRecep(this.recep)
  //         .subscribe(addRecep => {
  //             alert("Successfully Added. Recep ID: " + addRecep.recepID);
  //             this.router.navigateByUrl("/receps");
  //         }, err => alert(err.message));
  }

}
