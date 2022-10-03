import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';

@Component({
  selector: 'app-moncours',
  templateUrl: './moncours.component.html',
  styleUrls: ['./moncours.component.css']
})
export class MoncoursComponent implements OnInit {

  ListFormation: any = []
  UserId: any
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private DataFormateur: DataServiceFormateurService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.GetFormationByUser();
  }

  GetFormationByUser() {
    this.UserId = localStorage.getItem('tokenid')
    this.DataFormateur.GetFormationByUser(this.UserId).subscribe((data) => {
      this.ListFormation = data
      this.spinnner = true;
    })
  }

  SendIdFormation(id: number) {
    //console.log(id)
    this.router.navigate(['etudiant/coursedetails'], { queryParams: { FormationId: id } })
  }

}
