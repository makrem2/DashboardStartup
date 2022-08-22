import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-nosformation',
  templateUrl: './nosformation.component.html',
  styleUrls: ['./nosformation.component.css']
})
export class NosformationComponent implements OnInit {

  ListFormation:any=[]
  constructor(private dataservice:DataServiceAdminService) { }

  ngOnInit(): void {

    this.dataservice.GetAllFormation().subscribe(data=>this.ListFormation=data)
  }

  AddFavorite(id:any){
    
  }

}
