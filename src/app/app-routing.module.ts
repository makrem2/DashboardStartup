import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';
import { FormateurLayoutComponent } from './layouts/formateur-layout/formateur-layout.component';
import { LoginAdminComponent } from './layouts/login-admin/login-admin.component';
import { Pages404Component } from './layouts/pages404/pages404.component';
import { AdminGuardsGuard } from './views/guards/admin-guards.guard';
import { EtudiantguardsGuard } from './views/guards/etudiantguards.guard';
import { FormateurguardsGuard } from './views/guards/formateurguards.guard';

const routes: Routes = [
  {path:'admin',component:AdminLayoutComponent,canActivate:[AdminGuardsGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'ajouterutilisateur',loadChildren:()=>import('./views/admin/ajouterutilistateur/ajouterutilistateur.module').then(m=>m.AjouterutilistateurModule)},
    {path:'gestionutilisateur',loadChildren:()=>import('./views/admin/gestionutilisateur/gestionutilisateur.module').then(m=>m.GestionutilisateurModule)},
    {path:'profile',loadChildren:()=>import('./views/admin/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
    {path:'gestionmessage',loadChildren:()=>import('./views/admin/gestion-message/gestion-message.module').then(m=>m.GestionMessageModule)},
    {path:'ajouterFormation',loadChildren:()=>import('./views/admin/ajouterformation/ajouterformation.module').then(m=>m.AjouterformationModule)},
    {path:'gestionFormation',loadChildren:()=>import('./views/admin/gestion-formations/gestion-formations.module').then(m=>m.GestionFormationsModule)},
    {path:'gestionSession',loadChildren:()=>import('./views/admin/gestion-session/gestion-session.module').then(m=>m.GestionSessionModule)},
    {path:'gestionCours',loadChildren:()=>import('./views/admin/gestion-cours/gestion-cours.module').then(m=>m.GestionCoursModule)},
    {path:'gestionDevoir',loadChildren:()=>import('./views/admin/gestion-devoir/gestion-devoir.module').then(m=>m.GestionDevoirModule)},
    {path:'gestionForum',loadChildren:()=>import('./views/admin/gestion-forum/gestionforum.module').then(m=>m.GestionforumModule)},
    {path:'gestionNote',loadChildren:()=>import('./views/admin/gestion-note/gestion-note.module').then(m=>m.GestionNoteModule)},
    {path:'score',loadChildren:()=>import('./views/admin/score/score.module').then(m=>m.ScoreModule)}
  ]},

  {path:'formateur',component:FormateurLayoutComponent,canActivate:[FormateurguardsGuard],children:[
    {path:'',loadChildren:()=>import('./views/formateur/dashboard-formateur/dashboard-formateur.module').then(m=>m.DashboardFormateurModule)},
    {path:'dashboard',loadChildren:()=>import('./views/formateur/dashboard-formateur/dashboard-formateur.module').then(m=>m.DashboardFormateurModule)},
    {path:'profile',loadChildren:()=>import('./views/formateur/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
    {path:'GestionEtudiants',loadChildren:()=>import('./views/formateur/gestion-etudiants/gestion-etudiants.module').then(m=>m.GestionEtudiantsModule)},
    {path:'gestionCours',loadChildren:()=>import('./views/formateur/gestion-cours/gestion-cours.module').then(m=>m.GestionCoursModule)},
    {path:'gestionForum',loadChildren:()=>import('./views/formateur/gestionforum/gestionforum.module').then(m=>m.GestionforumModule)},
    {path:'gestionNote',loadChildren:()=>import('./views/formateur/gestion-note/gestion-note.module').then(m=>m.GestionNoteModule)},
    {path:'Depotdevoir',loadChildren:()=>import('./views/formateur/depotdevoir/depotdevoir.module').then(m=>m.DepotdevoirModule)},
    {path:'meet-zoom',loadChildren:()=>import('./views/formateur/meet-zoom/meet-zoom.module').then(m=>m.MeetZoomModule)},
    {path:'score',loadChildren:()=>import('./views/formateur/score/score.module').then(m=>m.ScoreModule)}
  
  ]},

  {path:'etudiant',component:EtudiantLayoutComponent,canActivate:[EtudiantguardsGuard],children:[
    {path:'',loadChildren:()=>import('./views/etudiant/dashboard-etudiant/dashboard-etudiant.module').then(m=>m.DashboardEtudiantModule)},
    {path:'dashboard',loadChildren:()=>import('./views/etudiant/dashboard-etudiant/dashboard-etudiant.module').then(m=>m.DashboardEtudiantModule)},
    {path:'gestionForum',loadChildren:()=>import('./views/etudiant/gestionforum/gestionforum.module').then(m=>m.GestionforumModule)},
    {path:'profile',loadChildren:()=>import('./views/etudiant/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
    {path:'moncours',loadChildren:()=>import('./views/etudiant/moncours/moncours.module').then(m=>m.MoncoursModule)},
    {path:'nosformations',loadChildren:()=>import('./views/etudiant/nosformation/nosformation.module').then(m=>m.NosformationModule)},
    {path:'listfavorite',loadChildren:()=>import('./views/etudiant/favorite/favorite.module').then(m=>m.FavoriteModule)},
    {path:'coursedetails',loadChildren:()=>import('./views/etudiant/coursedetails/coursedetails.module').then(m=>m.CoursedetailsModule)},
    {path:'gestionNote',loadChildren:()=>import('./views/etudiant/gestion-note/gestion-note.module').then(m=>m.GestionNoteModule)},
    {path:'score',loadChildren:()=>import('./views/etudiant/score/score.module').then(m=>m.ScoreModule)},
    {path:'quiz',loadChildren:()=>import('./views/etudiant/quiz/quiz.module').then(m=>m.QuizModule)} 
  ]},

  {path:'',component:LoginAdminComponent},

  {path:'**',component:Pages404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
