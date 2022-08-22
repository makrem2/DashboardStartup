import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCoursRoutingModule } from './gestion-cours-routing.module';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';


@NgModule({
  declarations: [
    GestionCoursComponent
  ],
  imports: [
    CommonModule,
    GestionCoursRoutingModule
  ]
  ,
  providers: [authInterceptorProviders]
})
export class GestionCoursModule { }
