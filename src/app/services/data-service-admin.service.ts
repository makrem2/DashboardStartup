import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root',
})
export class DataServiceAdminService {
  constructor(private http: HttpClient) {}

  //**************************** UserSerivce ************************************

  AddAdmin(user: any) {
    return this.http.post(API_URL + 'auth/signupAdmin', user);
  }
  AddFormateur(user: any) {
    return this.http.post(API_URL + 'auth/signupFormateur', user);
  }
  AddEtudiant(user: any) {
    return this.http.post(API_URL + 'auth/signupEtudiant', user);
  }

  DeleteUser(id: number) {
    return this.http.delete(API_URL + 'auth/deleteUsers/' + id);
  }

  GetAllUsers() {
    return this.http.get(API_URL + 'auth/retrieveAllUsers');
  }
  GetAllAdmin(role: any) {
    return this.http.get(API_URL + 'auth/GetUserByRole/' + role);
  }
  GetAllEtudiant(role: any) {
    return this.http.get(API_URL + 'auth/GetUserByRole/' + role);
  }

  GetUserById(id: any) {
    return this.http.get(API_URL + 'auth/GetOneUser/' + id);
  }

  ModifierPhoto(id: any, file: any) {
    return this.http.put(API_URL + 'auth/ModifierUserPhoto/' + id, file);
  }

  ModifierProfil(id: any, user: any) {
    return this.http.put(API_URL + 'auth/ModifierUser/' + id, user);
  }

  //**************************** SessionSerivce ************************************

  GetAllSession() {
    return this.http.get(API_URL + 'Session/GetAllsession');
  }

  //**************************** MessagesSerivce ************************************

  GetAllMessage() {
    return this.http.get(API_URL + 'Message/retrieveAllMessage');
  }

  DeleteMessage(id: number) {
    return this.http.delete(API_URL + 'Message/deleteMessage/' + id);
  }

  //**************************** FormationSession ************************************

  public deleteSession(id: number) {
    return this.http.delete(API_URL + 'Session/session/delete-session/' + id);
  }

  //**************************** FormationSerivce ************************************

  AjouterFormation(formation: any) {
    return this.http.post(API_URL + 'Formation/AjouterFormation', formation);
  }

  GetAllFormation() {
    return this.http.get(API_URL + 'Formation/getAllFormation');
  }

  DeleteFormation(id: number) {
    return this.http.delete(API_URL + 'Formation/deleteFormation/' + id);
  }

  affecterEtudiantAFormation(idetud: number, idforma: any) {
    return this.http.post(
      API_URL + 'Formation/affecterEtudiantAFormation/' + idetud,
      idforma
    );
  }

  AjouterFormationCategorie(FormationCategorie: any) {
    return this.http.post(
      API_URL + 'Formation/AjouterFormationCategorie',
      FormationCategorie
    );
  }

  GetAllFormationCategorie() {
    return this.http.get(API_URL + 'Formation/getAllFormationCategorie');
  }

  UpdateFormation(formation: any, id: any) {
    return this.http.put(
      API_URL + 'Formation/ModifierFormation/' + id,
      formation
    );
  }

  retrieveAllNote() {
    return this.http.get(API_URL + 'Note/retrieveAllNote');
  }

  findNoteparFormateur(id: any) {
    return this.http.get(API_URL + 'Note/findNoteparFormateur/' + id);
  }

  //Statistique

  CountUser(id: any) {
    return this.http.get(API_URL + 'auth/CountUser/' + id);
  }

  CountFormation() {
    return this.http.get(API_URL + 'Formation/CountFormation');
  }

  ActiveSession() {
    return this.http.get(API_URL + 'Session/ActiveSession');
  }

  GetMaxMoyenne() {
    return this.http.get(API_URL + 'Note/GetMaxMoyenne');
  }

  GetMaxMoyenneParFormation(id: any) {
    return this.http.get(API_URL + 'Note/GetMaxMoyenneParFormation/' + id);
  }

  EtudiantMoyenne(idetudiant: any, formationid: any) {
    return this.http.put(
      API_URL + 'Note/EtudiantMoyenne/' + idetudiant,
      formationid
    );
  }

  GetMoyenneParEtudaint(idEtudiant: any) {
    return this.http.get(API_URL + 'Note/GetMoyenneParEtudaint/' + idEtudiant);
  }

  GetALLMoyenne() {
    return this.http.get(API_URL + 'Note/GetALLMoyenne');
  }

  DeleteScore(idScore: any) {
    return this.http.delete(API_URL + 'Note/deleteScore/' + idScore);
  }
}
