import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MainComponent } from './components/layouts/main/main.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DishesComponent } from './components/pages/dishes/dishes.component';
// import { InsertComponent } from './components/insert/insert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecepsComponent } from './components/receps/receps.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,  
    DishesComponent, PageNotFoundComponent, RecepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
