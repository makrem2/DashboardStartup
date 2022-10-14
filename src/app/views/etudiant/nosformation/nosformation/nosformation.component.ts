import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';

@Component({
  selector: 'app-nosformation',
  templateUrl: './nosformation.component.html',
  styleUrls: ['./nosformation.component.css']
})
export class NosformationComponent implements OnInit {

  ListFormation: any = []
  closeSub: Subscription | undefined;
  spinnner: boolean = false;
  constructor(private dataservice: DataServiceAdminService) { }

  ngOnInit(): void {

    this.GetAllFormation();

  }

  GetAllFormation() {
    this.closeSub= this.dataservice.GetAllFormation().subscribe((data) => {
      this.spinnner = true;
      this.ListFormation = data
    })
  }

  AddFavorite(id: any) {

  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
