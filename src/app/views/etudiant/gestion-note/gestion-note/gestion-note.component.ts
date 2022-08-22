import { Component, OnInit } from '@angular/core';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit {

  DataNote:any=[]
  idUser:any
  searchText: any;
  p: number = 1;
  constructor(private dsetudiant:DataServiceFormateurService) { }

  ngOnInit(): void {

   this.idUser=localStorage.getItem('tokenid')

    this.dsetudiant.findNoteparEtudaint(this.idUser).subscribe(data=>this.DataNote=data)
  }

}
