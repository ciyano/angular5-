import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import { BiensService } from './biens/services/biens.service';
import { BarreNavigationComponent } from './barre-navigation/barre-navigation.component';
import { MembresComponent } from './membres/membres.component';
import { MembresService } from './membres/services/membres.service';
import { FormsModule } from '@angular/forms';
import { RechercheBiensMembresComponent } from './recherche-biens-membres/recherche-biens-membres.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services/servicesDesServices/services.service';
import { AjouterBiensComponent } from './biens/AjoutBien/ajouter-biens/ajouter-biens.component';
import { RechercheBiensComponent } from './biens/rechercheBiens/recherche-biens/recherche-biens.component';
import { LoginComponent } from './membres/login/login.component';
import { RegisterComponent } from './membres/register/register.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: 'biens', component: BiensComponent },
  { path: 'membres', component: MembresComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'rechercheBiensMembres', component: RechercheBiensMembresComponent },
  { path: 'biens/AjoutBien', component: AjouterBiensComponent },
  { path: 'rechercheBien', component: RechercheBiensComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  ];




@NgModule({
  declarations: [
    AppComponent,
    BiensComponent,
    BarreNavigationComponent,
    MembresComponent,
    RechercheBiensMembresComponent,
    PiedPageComponent,
    ServicesComponent,
    AjouterBiensComponent,
    RechercheBiensComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule


  ],

  exports: [ BiensComponent, MembresComponent,
    RechercheBiensMembresComponent, RegisterComponent,
     RouterModule, ServicesComponent ],
  providers: [BiensService, MembresService,
    ServicesService, [{provide: APP_BASE_HREF, useValue : '/' }]
],
  bootstrap: [AppComponent]
})
export class AppModule { }
