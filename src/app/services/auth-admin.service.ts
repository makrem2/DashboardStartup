import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Session } from '../models/Session';
import { environment } from '../../environments/environment';
const TOKEN_KEY = 'auth-token';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthAdminService {
  username: any;
  role: any;
  id: any;

  helper = new JwtHelperService();
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(environment.apiUrl + 'auth/signin', data, httpOptions);
  }

  checkEmail(data: any) {
    return this.http.post(environment.apiUrl + 'auth/checkEmail', data);
  }

  resetPassword(data: any) {
    return this.http.post(environment.apiUrl + 'auth/resetPassword', data);
  }

  isSaveDataProfile(token: any) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token.accessToken);
    localStorage.setItem('tokenid', token.id);
    localStorage.setItem('roletoken', token.roles);
    localStorage.setItem('username', token.username);
    localStorage.setItem('specialite', token.specialite);
  }

  Lougout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  getToken() {
    let token: any = localStorage.getItem(TOKEN_KEY);

    return token;
  }

  getUserid() {
    let idtoken: any = localStorage.getItem('tokenid');

    return idtoken;
  }

  AdminisLoggedIN() {
    let token: any = localStorage.getItem(TOKEN_KEY);

    let roletoken: any = localStorage.getItem('roletoken');

    if (!localStorage.getItem(TOKEN_KEY)) {
      return false;
    }

    if (roletoken !== 'ROLE_ADMIN') {
      return false;
    }

    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  FormateurisLoggedIN() {
    let token: any = localStorage.getItem(TOKEN_KEY);

    let roletoken: any = localStorage.getItem('roletoken');

    if (!localStorage.getItem(TOKEN_KEY)) {
      return false;
    }

    if (roletoken !== 'ROLE_Formateur') {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  EtudiantisLoggedIN() {
    let token: any = localStorage.getItem(TOKEN_KEY);

    let roletoken: any = localStorage.getItem('roletoken');

    if (!localStorage.getItem(TOKEN_KEY)) {
      return false;
    }

    if (roletoken !== 'ROLE_Etudiant') {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
  public addSession(type: string, username: string) {
    let minute: string = new Date().getMinutes().toString();
    if (+minute < 10) {
      minute = '0' + minute;
    }
    let hour: string = new Date().getHours().toString();
    if (+hour < 10) {
      hour = '0' + hour;
    }
    let time: string = hour + ':' + minute;
    let day: string = new Date().getDate().toString();
    if (+day < 10) {
      day = '0' + day;
    }
    let month: string = (new Date().getMonth() + 1).toString();
    if (+month < 10) {
      month = '0' + month;
    }
    let date: string = day + '/' + month + '/' + new Date().getFullYear();
    let request_body = new Session(0, type, username, date, time, 'active');
    this.http
      .post(environment.apiUrl + 'Session/session/add-session', request_body)
      .subscribe((data) => {
        if (data != null) {
          sessionStorage.setItem('Session', JSON.stringify(data) || '{}');
        } else {
          console.error('Session not added');
        }
      });
  }

  public deleteSession(id: number) {
    let url: string = environment.apiUrl + 'Session/session/delete-session/' + id;
    return this.http.delete(url);
  }

  // public updateSession() {
  //   let minute: string = new Date().getMinutes().toString();
  //   if (+minute < 10) {
  //     minute = '0' + minute;
  //   }
  //   let hour: string = new Date().getHours().toString();
  //   if (+hour < 10) {
  //     hour = '0' + hour;
  //   }
  //   let time: string = hour + ':' + minute;
  //   let request_body: Session = JSON.parse(
  //     sessionStorage.getItem('Session') || '{}'
  //   );
  //   request_body.outTime = time;
  //   this.http
  //     .post('http://localhost:8080/api/Session/session/update', request_body)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}
