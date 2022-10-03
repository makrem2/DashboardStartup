import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSessionRoutingModule } from './gestion-session-routing.module';
import { GestionSessionComponent } from './gestion-session/gestion-session.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';


@NgModule({
  declarations: [
    GestionSessionComponent
  ],
  imports: [
    CommonModule,
    GestionSessionRoutingModule,
    NgxPaginationModule
  ]
  ,
  providers: [authInterceptorProviders]
})
export class GestionSessionModule { }
