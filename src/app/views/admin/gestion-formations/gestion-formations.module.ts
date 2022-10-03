import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionFormationsRoutingModule } from './gestion-formations-routing.module';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';


@NgModule({
  declarations: [
    GestionFormationsComponent
  ],
  imports: [
    CommonModule,
    GestionFormationsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
  ,
  providers: [authInterceptorProviders]
})
export class GestionFormationsModule { }
