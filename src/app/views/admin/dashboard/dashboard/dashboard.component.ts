import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  NbEtudiant: any;
  NbFormateur: any;
  NbFormation: any;
  NBSession: any;
  MaxMoyenne: any;
  p: number = 1;
  MaxMoyenneParFormationWeb: any;
  MaxMoyenneParFormationMarketing: any;
  MaxMoyenneParFormationRobotique: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private dsadmin: DataServiceAdminService) { }

  ngOnInit(): void {
    this.reload();
  }
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }


  reload(){
   this.closeSub= this.dsadmin
      .CountUser('ROLE_Formateur')
      .subscribe((data) => {
        this.NbFormateur = data
      });

      this.closeSub= this.dsadmin
      .CountUser('ROLE_Etudiant')
      .subscribe((data) => {
        this.NbEtudiant = data
      });

      this.closeSub= this.dsadmin
      .CountFormation()
      .subscribe((data) => {

        this.NbFormation = data;
      });

      this.closeSub= this.dsadmin.ActiveSession().subscribe((data) => {

      this.NBSession = data

    });

    this.closeSub= this.dsadmin.GetMaxMoyenne().subscribe((data) => {
      
      this.MaxMoyenne = data
      this.spinnner = true;

    });

    // this.closeSub=  this.dsadmin
    //   .GetMaxMoyenneParFormation('Developpement Web')
    //   .subscribe((data) => {

    //     this.MaxMoyenneParFormationWeb = data
    //   });

    //   this.closeSub=  this.dsadmin
    //   .GetMaxMoyenneParFormation('Marketing Digital')
    //   .subscribe((data) => {

    //     this.MaxMoyenneParFormationMarketing = data
    //   });

    //   this.closeSub=  this.dsadmin
    //   .GetMaxMoyenneParFormation('Robotique')
    //   .subscribe((data) => {

    //     this.MaxMoyenneParFormationRobotique = data
    //   });

  }


}
