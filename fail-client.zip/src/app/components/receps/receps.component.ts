import { Component, OnInit } from '@angular/core';
import { RecepModel } from 'src/app/models/recep-model';
import { GetRecepsService } from 'src/app/services/get-receps.service';

@Component({
  selector: 'app-receps',
  templateUrl: './receps.component.html',
  styleUrls: ['./receps.component.css']
})
export class RecepsComponent implements OnInit {
  public receps: RecepModel[];
  constructor(private myRecepService: GetRecepsService) { }
  async ngOnInit() {
    try {
      this.receps = await this.myRecepService.getAllRecepsAsync();
      console.log(this.receps);
  }
  catch (err) {
      alert("Error: " + err.message);
  }
}
}
