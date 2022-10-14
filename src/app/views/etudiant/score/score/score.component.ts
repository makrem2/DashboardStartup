import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  DataMoyenne: any = []
  EtudiantId: any
  searchText: any;
  p: number = 1;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private serviceadmin: DataServiceAdminService) { }

  ngOnInit(): void {
    this.GetMoyenneParEtudaint();
  }

  GetMoyenneParEtudaint() {
    this.EtudiantId = localStorage.getItem('tokenid')
    this.closeSub=  this.serviceadmin.GetMoyenneParEtudaint(this.EtudiantId).subscribe((data) => {
      this.DataMoyenne = data
      this.spinnner = true;
    })

  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }


}
