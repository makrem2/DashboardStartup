import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMessageRoutingModule } from './gestion-message-routing.module';
import { GestionMessageComponent } from './gestion-message/gestion-message.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';


@NgModule({
  declarations: [
    GestionMessageComponent
  ],
  imports: [
    CommonModule,
    GestionMessageRoutingModule
  ]
  ,
  providers: [authInterceptorProviders]
})
export class GestionMessageModule { }
