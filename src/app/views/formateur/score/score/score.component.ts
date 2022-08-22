import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  DataMoyenne: any = [];
  specialite: any;
  searchText: any;
  p: number = 1;
  constructor(private serviceadmin: DataServiceAdminService) {}

  ngOnInit(): void {
    // this.EtudiantId = localStorage.getItem('tokenid');
    this.specialite = localStorage.getItem('specialite');
    // this.serviceadmin
    //   .GetMoyenneParEtudaint(this.EtudiantId)
    //   .subscribe((data) => (this.DataMoyenne = data));


      this.serviceadmin.GetMaxMoyenneParFormation(this.specialite).subscribe((data)=>this.DataMoyenne=data)


  }
}
