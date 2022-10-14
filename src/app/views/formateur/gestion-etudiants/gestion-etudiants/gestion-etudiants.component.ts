import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';

@Component({
  selector: 'app-gestion-etudiants',
  templateUrl: './gestion-etudiants.component.html',
  styleUrls: ['./gestion-etudiants.component.css'],
})
export class GestionEtudiantsComponent implements OnInit {
  p: number = 1;
  searchText: any;
  dataEtudiant: any = [];
  specialite: any;
  userId: any;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private dataFormateur: DataServiceFormateurService) { }

  ngOnInit(): void {
    this.GetAllEtudiants();
  }

  GetAllEtudiants() {
    this.userId = localStorage.getItem('tokenid');
    this.closeSub = this.dataFormateur.GetUserSpecialite(this.userId).subscribe(
      (data) => {
      },
      (err: HttpErrorResponse) => {
        this.specialite = err.error.text;
        this.dataFormateur
          .GetAllEtudiants(this.specialite)
          .subscribe((data) => {
            this.dataEtudiant = data
            this.spinnner=true
          });
      }
    );
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
