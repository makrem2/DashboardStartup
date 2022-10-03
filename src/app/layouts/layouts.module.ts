import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormateurLayoutComponent } from './formateur-layout/formateur-layout.component';
import { FormsModule } from '@angular/forms';
import { EtudiantLayoutComponent } from './etudiant-layout/etudiant-layout.component';
import { Pages404Component } from './pages404/pages404.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginAdminComponent,
    FormateurLayoutComponent,
    EtudiantLayoutComponent,
    Pages404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutsModule { }
