import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit {
  p: number = 1;
  searchText: any;
  DataNote: any = []
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private dsAdmin: DataServiceAdminService) { }

  ngOnInit(): void {

    this.retrieveAllNote();

  }

  retrieveAllNote() {
    this.dsAdmin.retrieveAllNote().subscribe((data) => {
      this.spinnner = true;
      this.DataNote = data
    })
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
