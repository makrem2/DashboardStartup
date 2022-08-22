import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.css']
})
export class DashboardEtudiantComponent implements OnInit {
  NbEtudiant: any;
  NbFormateur: any;
  NbFormation: any;
  NBSession: any;
  MaxMoyenne: any;
  p: number = 1;
  MaxMoyenneParFormationWeb: any;
  MaxMoyenneParFormationMarketing: any;
  MaxMoyenneParFormationRobotique: any;
  constructor(private dsadmin: DataServiceAdminService) {}

  ngOnInit(): void {
    this.dsadmin
      .CountUser('ROLE_Formateur')
      .subscribe((data) => (this.NbFormateur = data));

    this.dsadmin
      .CountUser('ROLE_Etudiant')
      .subscribe((data) => (this.NbEtudiant = data));

    this.dsadmin
      .CountFormation()
      .subscribe((data) => (this.NbFormation = data));

    this.dsadmin.ActiveSession().subscribe((data) => (this.NBSession = data));

    this.dsadmin.GetMaxMoyenne().subscribe((data) => (this.MaxMoyenne = data));

    this.dsadmin
      .GetMaxMoyenneParFormation('Developpement Web')
      .subscribe((data) => (this.MaxMoyenneParFormationWeb = data));

      this.dsadmin
      .GetMaxMoyenneParFormation('Marketing Digital')
      .subscribe((data) => (this.MaxMoyenneParFormationMarketing = data));

      this.dsadmin
      .GetMaxMoyenneParFormation('Robotique')
      .subscribe((data) => (this.MaxMoyenneParFormationRobotique = data));
  }
}
