import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class DataServiceFormateurService {
  constructor(private http: HttpClient) {}

  GetUserSpecialite(id: any) {
    return this.http.get(API_URL + 'auth/GetUserSpecialite/' + id);
  }

  GetAllEtudiants(id: any) {
    return this.http.get(API_URL + 'auth/GetUserByFormation/' + id);
  }

  AddMessage(message: any) {
    return this.http.post(API_URL + 'Message/AjouterMessage', message);
  }

  AddChapiter(chapiter: any) {
    return this.http.post(API_URL + 'Chapiter/AjouterChapiter', chapiter);
  }

  ModifierSection(idsection: any, section: any) {
    return this.http.put(
      API_URL + 'Chapiter/updateChapiter/' + idsection,
      section
    );
  }

  DeleteSection(idsection: any) {
    return this.http.delete(API_URL + 'Chapiter/deleteChapiter/' + idsection);
  }

  //course CRUD

  AddCourse(Course: any) {
    return this.http.post(API_URL + 'Course/uploadCourse', Course);
  }

  ModifierCourse(idcours: any, cours: any) {
    return this.http.put(API_URL + 'Course/ModifierCourse/' + idcours, cours);
  }

  DeleteCourse(idcours: any) {
    return this.http.delete(API_URL + 'Course/deleteCourseById/' + idcours);
  }

  listcoursparFormateur(id: number) {
    return this.http.get(API_URL + 'Chapiter/listcoursparFormateur/' + id);
  }

  GetFormationByUser(id: number) {
    return this.http.get(API_URL + 'Formation/GetFormationByUser/' + id);
  }

  public listChapiterparFormation(id: number) {
    return this.http.get(API_URL + 'Chapiter/listChapiterparFormation/' + id);
  }

  public AjouterDevoir(devoir: any) {
    return this.http.post(API_URL + 'Devoir/AjouterDevoir', devoir);
  }

  DeleteDevoir(iddevoir: any) {
    return this.http.delete(API_URL + 'Devoir/deletedevoir/' + iddevoir);
  }

  public DepotDevoir(devoir: any) {
    return this.http.post(API_URL + 'DepotDevoir/AjouterDevoir', devoir);
  }

  //Forum
  public getAllForumQuestions() {
    return this.http.get(API_URL + 'Question/forum/all-questions');
  }

  // public getAllForumReplies() {
  //   return this.http.get('http://localhost:8080/forum/all-replies');
  // }

  public postQuestion(post_question: any) {
    return this.http.post(
      API_URL + 'Question/forum/post/question',
      post_question
    );
  }

  public postReply(post_reply: any) {
    return this.http.post(API_URL + 'Reply/forum/post/reply', post_reply);
  }

  public findNoteparEtudaint(id: number) {
    return this.http.get(API_URL + 'Note/findNoteparEtudaint/' + id);
  }

  public findDevoirparFormateur(id: number) {
    return this.http.get(API_URL + 'Devoir/findDevoirparFormateur/' + id);
  }

  public findDepot_devoirsparEtudiant(id: number) {
    return this.http.get(
      API_URL + 'DepotDevoir/findDepot_devoirsparEtudiant/' + id
    );
  }

  public findDepotDevoirparFormateur(id: number) {
    return this.http.get(
      API_URL + 'DepotDevoir/findDepotDevoirparFormateur/' + id
    );
  }

  public AddNote(datanote: any) {
    return this.http.post(API_URL + 'Note/AddNote', datanote);
  }

  //Quiz

  public getQuiz(idchapiter: any) {
    return this.http.get<any>(
      API_URL + 'Quiz_Question/listQuiz_QuestionparChapiter/' + idchapiter
    );
  }

  public AjouterQuestion(question: any) {
    return this.http.post(API_URL + 'Quiz_Question/AjouterQuestion', question);
  }

  public AjouterOption(option: any) {
    return this.http.post(API_URL + 'Quiz_Question/AjouterOption', option);
  }

  listQuiz_QuestionparCode(code: any) {
    return this.http.get(
      API_URL + 'Quiz_Question/listQuiz_QuestionparCode/' + code
    );
  }

  CountNote(idUser: any, chapiterid: any) {
    return this.http.get(
      API_URL + 'Quiz_Question/CountNote/' + idUser + '/' + chapiterid
    );
  }

  public AddQuizNote(QuizNote: any) {
    return this.http.post(API_URL + 'Quiz_Question/AddQuizNote', QuizNote);
  }

  public UpdateQuizNote(QuizNote: any) {
    return this.http.put(API_URL + 'Quiz_Question/UpdateQuizNote', QuizNote);
  }

  countdepotdevoir(iduser: any, devoirid: any) {
    return this.http.get(
      API_URL + 'DepotDevoir/countdepotdevoir/' + iduser + '/' + devoirid
    );
  }

  countNoteDevoir(iduser: any, devoirid: any) {
    return this.http.get(
      API_URL + 'Note/countNoteDevoir/' + iduser + '/' + devoirid
    );
  }

  ModifierForumPost(datamodifier: any, idquestion: any) {
    return this.http.put(
      API_URL + 'Question/ModifierForumPost/' + idquestion,
      datamodifier
    );
  }

  DeleteForumPost(idquestion: any) {
    return this.http.delete(API_URL + 'Question/deleteForumPost/' + idquestion);
  }

  ModifierForumReply(datamodifier: any, idreply: any) {
    return this.http.put(
      API_URL + 'Reply/ModifierForumReply/' + idreply,
      datamodifier
    );
  }

  DeleteForumReply(idReply: any) {
    return this.http.delete(API_URL + 'Reply/deleteForumReply/' + idReply);
  }
}
