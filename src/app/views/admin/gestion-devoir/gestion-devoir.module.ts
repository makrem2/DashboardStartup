import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDevoirRoutingModule } from './gestion-devoir-routing.module';
import { GestionDevoirComponent } from './gestion-devoir/gestion-devoir.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';


@NgModule({
  declarations: [
    GestionDevoirComponent
  ],
  imports: [
    CommonModule,
    GestionDevoirRoutingModule
  ]
  ,
  providers: [authInterceptorProviders]
})
export class GestionDevoirModule { }
