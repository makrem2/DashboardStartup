import { Component, OnInit } from '@angular/core';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css'],
})
export class GestionNoteComponent implements OnInit {
  DataNote: any = [];
  id:any;
  p: number = 1;
  searchText: any;
  constructor(private dsAdmin: DataServiceAdminService) {}

  ngOnInit(): void {

this.id=localStorage.getItem('tokenid')


    this.dsAdmin.findNoteparFormateur(this.id).subscribe((data) => (this.DataNote = data));
  }
}
