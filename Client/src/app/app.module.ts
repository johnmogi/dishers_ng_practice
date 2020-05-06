import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MainComponent } from './components/layouts/main/main.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InsertComponent } from './components/insert/insert.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { DishesComponent } from './components/pages/dishes/dishes.component';
import { RecepsComponent } from './components/pages/receps/receps.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    InsertComponent,
    PageNotFoundComponent,
    DishesComponent,
    RecepsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule
    
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
