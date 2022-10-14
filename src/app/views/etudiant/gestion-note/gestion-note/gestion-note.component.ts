import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit {

  DataNote: any = []
  idUser: any
  searchText: any;
  p: number = 1;
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private dsetudiant: DataServiceFormateurService) { }

  ngOnInit(): void {
    this.findNoteparEtudaint();
  }

  findNoteparEtudaint() {

    this.idUser = localStorage.getItem('tokenid')

    this.closeSub=  this.dsetudiant.findNoteparEtudaint(this.idUser).subscribe((data) => {
      this.DataNote = data
      this.spinnner = true;
    })
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
