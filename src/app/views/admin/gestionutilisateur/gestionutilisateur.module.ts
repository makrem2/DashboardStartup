import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionutilisateurRoutingModule } from './gestionutilisateur-routing.module';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';

@NgModule({
  declarations: [
    GestionutilisateurComponent
  ],
  imports: [
    CommonModule,
    GestionutilisateurRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],
  providers: [authInterceptorProviders]
})
export class GestionutilisateurModule { }
