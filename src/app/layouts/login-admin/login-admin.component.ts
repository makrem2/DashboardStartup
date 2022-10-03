import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  steps: any = 0;
  dataRecevie: any;
  url: any;
  messageErr: any;
  messagesuccess: any;
  username: any;
  visible:boolean = true;
  changetype:boolean =true;
  constructor(
    private authadmin: AuthAdminService,
    private router: Router,
    private notifyService: NotificationService
  ) {
    // this.username=authadmin.getUserName()
    //console.log(this.username)

    if (this.authadmin.AdminisLoggedIN() == true) {
      this.router.navigate(['/admin']);
    }
    if (this.authadmin.FormateurisLoggedIN() == true) {
      this.router.navigate(['/formateur']);
    }
    if (this.authadmin.EtudiantisLoggedIN() == true) {
      this.router.navigate(['/etudiant']);
    }
  }
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  ngOnInit(): void {}

  Next() {
    this.steps = this.steps + 1;
  }

  loginadmin(f: any) {
    let data = f.value;

    //console.log(data)
    this.authadmin.login(data).subscribe(
      (response) => {
        //console.log(response)
        this.dataRecevie = response;

        if (this.dataRecevie.roles == 'ROLE_ADMIN') {
          this.authadmin.isSaveDataProfile(this.dataRecevie);
          this.authadmin.addSession('ROLE_ADMIN', this.dataRecevie.username);
          this.router.navigate(['/admin/dashboard']);
        } else if (this.dataRecevie.roles == 'ROLE_Formateur') {
          this.authadmin.isSaveDataProfile(this.dataRecevie);
          this.authadmin.addSession(
            'ROLE_Formateur',
            this.dataRecevie.username
          );
          this.router.navigate(['/formateur/dashboard']);
        } else if (this.dataRecevie.roles == 'ROLE_Etudiant') {
          this.authadmin.isSaveDataProfile(this.dataRecevie);
          this.authadmin.addSession('ROLE_Etudiant', this.dataRecevie.username);
          this.router.navigate(['/etudiant/dashboard']);
        }
        // this.router.navigate([this.url])
      },
      (error) => {
        // console.log(error)
        // this.messageErr = "'Nom d'utilisateur ou Mot de passe est incorrect'";
        this.notifyService.showError("'Nom d'utilisateur ou Mot de passe est incorrect'", 'Error');
      }
    );
  }

  checkEmail(c: any) {
    let data = new FormData();

    data.append('email', c.value.email);
    this.authadmin.checkEmail(data).subscribe(
      (data) => {
        this.steps++;
      },
      (err: HttpErrorResponse) => {

        this.notifyService.showError("Cette email n'existe pas", 'Error');
      }
    );
  }
  resetPassword(r: any) {
    let data = new FormData();

    data.append('email', r.value.email);
    data.append('code', r.value.code);
    data.append('password', r.value.password);

    this.authadmin.resetPassword(data).subscribe(
      (data) => {
        this.steps = 0;
        this.messagesuccess = data;

        this.notifyService.showSuccess(this.messagesuccess.message, 'Success');
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageErr = err.error;
        this.notifyService.showError(this.messageErr, 'Error');
      }
    );
  }
}
