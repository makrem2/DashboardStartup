import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataServiceAdminService {
  constructor(private http: HttpClient) {}

  //**************************** UserSerivce ************************************

  AddAdmin(user: any) {
    return this.http.post(environment.apiUrl + 'auth/signupAdmin', user);
  }
  AddFormateur(user: any) {
    return this.http.post(environment.apiUrl  + 'auth/signupFormateur', user);
  }
  AddEtudiant(user: any) {
    return this.http.post(environment.apiUrl  + 'auth/signupEtudiant', user);
  }

  DeleteUser(id: number) {
    return this.http.delete(environment.apiUrl  + 'auth/deleteUsers/' + id);
  }

  GetAllUsers() {
    return this.http.get(environment.apiUrl  + 'auth/retrieveAllUsers');
  }
  GetAllAdmin(role: any) {
    return this.http.get(environment.apiUrl  + 'auth/GetUserByRole/' + role);
  }
  GetAllEtudiant(role: any) {
    return this.http.get(environment.apiUrl  + 'auth/GetUserByRole/' + role);
  }

  GetUserById(id: any) {
    return this.http.get(environment.apiUrl  + 'auth/GetOneUser/' + id);
  }

  ModifierPhoto(id: any, file: any) {
    return this.http.put(environment.apiUrl  + 'auth/ModifierUserPhoto/' + id, file);
  }

  ModifierProfil(id: any, user: any) {
    return this.http.put(environment.apiUrl  + 'auth/ModifierUser/' + id, user);
  }

  //**************************** SessionSerivce ************************************

  GetAllSession() {
    return this.http.get(environment.apiUrl  + 'Session/GetAllsession');
  }

  //**************************** MessagesSerivce ************************************

  GetAllMessage() {
    return this.http.get(environment.apiUrl  + 'Message/retrieveAllMessage');
  }

  DeleteMessage(id: number) {
    return this.http.delete(environment.apiUrl  + 'Message/deleteMessage/' + id);
  }

  //**************************** FormationSession ************************************

  public deleteSession(id: number) {
    return this.http.delete(environment.apiUrl  + 'Session/session/delete-session/' + id);
  }

  //**************************** FormationSerivce ************************************

  AjouterFormation(formation: any) {
    return this.http.post(environment.apiUrl  + 'Formation/AjouterFormation', formation);
  }

  GetAllFormation() {
    return this.http.get(environment.apiUrl  + 'Formation/getAllFormation');
  }

  DeleteFormation(id: number) {
    return this.http.delete(environment.apiUrl  + 'Formation/deleteFormation/' + id);
  }

  affecterEtudiantAFormation(idetud: number, idforma: any) {
    return this.http.post(
      environment.apiUrl  + 'Formation/affecterEtudiantAFormation/' + idetud,
      idforma
    );
  }

  AjouterFormationCategorie(FormationCategorie: any) {
    return this.http.post(
      environment.apiUrl  + 'Formation/AjouterFormationCategorie',
      FormationCategorie
    );
  }

  GetAllFormationCategorie() {
    return this.http.get(environment.apiUrl  + 'Formation/getAllFormationCategorie');
  }

  UpdateFormation(formation: any, id: any) {
    return this.http.put(
      environment.apiUrl  + 'Formation/ModifierFormation/' + id,
      formation
    );
  }

  retrieveAllNote() {
    return this.http.get(environment.apiUrl  + 'Note/retrieveAllNote');
  }

  findNoteparFormateur(id: any) {
    return this.http.get(environment.apiUrl  + 'Note/findNoteparFormateur/' + id);
  }

  //Statistique

  CountUser(id: any) {
    return this.http.get(environment.apiUrl  + 'auth/CountUser/' + id);
  }

  CountFormation() {
    return this.http.get(environment.apiUrl  + 'Formation/CountFormation');
  }

  ActiveSession() {
    return this.http.get(environment.apiUrl  + 'Session/ActiveSession');
  }

  GetMaxMoyenne() {
    return this.http.get(environment.apiUrl  + 'Note/GetMaxMoyenne');
  }

  GetMaxMoyenneParFormation(id: any) {
    return this.http.get(environment.apiUrl  + 'Note/GetMaxMoyenneParFormation/' + id);
  }

  EtudiantMoyenne(idetudiant: any, formationid: any) {
    return this.http.put(
      environment.apiUrl  + 'Note/EtudiantMoyenne/' + idetudiant,
      formationid
    );
  }

  GetMoyenneParEtudaint(idEtudiant: any) {
    return this.http.get(environment.apiUrl  + 'Note/GetMoyenneParEtudaint/' + idEtudiant);
  }

  GetALLMoyenne() {
    return this.http.get(environment.apiUrl  + 'Note/GetALLMoyenne');
  }

  DeleteScore(idScore: any) {
    return this.http.delete(environment.apiUrl  + 'Note/deleteScore/' + idScore);
  }
}
