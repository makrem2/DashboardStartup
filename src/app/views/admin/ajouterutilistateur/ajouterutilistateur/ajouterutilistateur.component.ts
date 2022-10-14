import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceAdminService } from 'src/app/services/data-service-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-ajouterutilistateur',
  templateUrl: './ajouterutilistateur.component.html',
  styleUrls: ['./ajouterutilistateur.component.css']
})
export class AjouterutilistateurComponent implements OnInit {
  DataFormationCategorie: any = []
  messagesuccessAdmin: any;
  messageerrorAdmin: any;
  closeSub: Subscription | undefined;
  visible:boolean = true;
  changetype:boolean =true;
  constructor(private DataServiceAdminService: DataServiceAdminService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.onload();
  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onload() {
    this.closeSub =  this.DataServiceAdminService.GetAllFormationCategorie().subscribe((data) => {

      this.DataFormationCategorie = data
    })
  }


  RestMessage() {

    this.messagesuccessAdmin = ''
    this.messageerrorAdmin = ''

  }

  addAdmin(admin: any) {
    let data = admin.value;
    this.closeSub =  this.DataServiceAdminService.AddAdmin(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        admin.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
      }
    );
  }

  addFormateur(formateur: any) {
    let data = formateur.value;
    this.closeSub = this.DataServiceAdminService.AddFormateur(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        formateur.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
      }
    );
  }

  addEtudiant(etudiant: any) {
    let data = etudiant.value;
    this.closeSub = this.DataServiceAdminService.AddEtudiant(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messagesuccessAdmin = data;
        this.notifyService.showSuccess(this.messagesuccessAdmin.message, 'Success');
        etudiant.resetForm();
      },
      (err: HttpErrorResponse) => {
        this.messageerrorAdmin = err.error;
        this.notifyService.showError(this.messageerrorAdmin.message, 'Error');
      }
    );
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
