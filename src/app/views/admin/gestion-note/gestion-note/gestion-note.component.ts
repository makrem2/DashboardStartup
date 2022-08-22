import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit {
  p: number = 1;
  searchText: any;
  DataNote:any=[]
  constructor(private dsAdmin:DataServiceAdminService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {


    this.dsAdmin.retrieveAllNote().subscribe(data=>this.DataNote=data)
  }

}
