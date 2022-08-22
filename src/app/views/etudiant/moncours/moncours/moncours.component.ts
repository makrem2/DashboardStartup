import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';

@Component({
  selector: 'app-moncours',
  templateUrl: './moncours.component.html',
  styleUrls: ['./moncours.component.css']
})
export class MoncoursComponent implements OnInit {

  ListFormation:any=[]
  UserId:any
  constructor(private DataFormateur:DataServiceFormateurService,
    private router:Router) {
    
   }

  ngOnInit(): void {
    this.UserId=localStorage.getItem('tokenid')
    this.DataFormateur.GetFormationByUser(this.UserId).subscribe(data=>this.ListFormation=data)
  }


  SendIdFormation(id:number){
    //console.log(id)
    this.router.navigate(['etudiant/coursedetails'], { queryParams: { FormationId: id } })
  }

}
