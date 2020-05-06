import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DishesComponent } from './components/pages/dishes/dishes.component';
import { InsertComponent } from './components/insert/insert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecepsComponent } from './components/receps/receps.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dishes", component: DishesComponent },
  { path: "receps", component: RecepsComponent },
  { path: "receps/new", component: InsertComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
