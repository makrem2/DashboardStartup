import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataServiceFormateurService {
  constructor(private http: HttpClient) {}

  GetUserSpecialite(id: any) {
    return this.http.get(environment.apiUrl + 'auth/GetUserSpecialite/' + id);
  }

  GetAllEtudiants(id: any) {
    return this.http.get(environment.apiUrl + 'auth/GetUserByFormation/' + id);
  }

  AddMessage(message: any) {
    return this.http.post(
      environment.apiUrl + 'Message/AjouterMessage',
      message
    );
  }

  AddChapiter(chapiter: any) {
    return this.http.post(
      environment.apiUrl + 'Chapiter/AjouterChapiter',
      chapiter
    );
  }

  ModifierSection(idsection: any, section: any) {
    return this.http.put(
      environment.apiUrl + 'Chapiter/updateChapiter/' + idsection,
      section
    );
  }

  DeleteSection(idsection: any) {
    return this.http.delete(
      environment.apiUrl + 'Chapiter/deleteChapiter/' + idsection
    );
  }

  //course CRUD

  AddCourse(Course: any) {
    return this.http.post(environment.apiUrl + 'Course/uploadCourse', Course);
  }

  ModifierCourse(idcours: any, cours: any) {
    return this.http.put(
      environment.apiUrl + 'Course/ModifierCourse/' + idcours,
      cours
    );
  }

  DeleteCourse(idcours: any) {
    return this.http.delete(
      environment.apiUrl + 'Course/deleteCourseById/' + idcours
    );
  }

  listcoursparFormateur(id: number) {
    return this.http.get(
      environment.apiUrl + 'Chapiter/listcoursparFormateur/' + id
    );
  }

  GetFormationByUser(id: number) {
    return this.http.get(
      environment.apiUrl + 'Formation/GetFormationByUser/' + id
    );
  }

  public listChapiterparFormation(id: number) {
    return this.http.get(
      environment.apiUrl + 'Chapiter/listChapiterparFormation/' + id
    );
  }

  public AjouterDevoir(devoir: any) {
    return this.http.post(environment.apiUrl + 'Devoir/AjouterDevoir', devoir);
  }

  DeleteDevoir(iddevoir: any) {
    return this.http.delete(
      environment.apiUrl + 'Devoir/deletedevoir/' + iddevoir
    );
  }

  public DepotDevoir(devoir: any) {
    return this.http.post(
      environment.apiUrl + 'DepotDevoir/AjouterDevoir',
      devoir
    );
  }

  //Forum
  public getAllForumQuestions() {
    return this.http.get(environment.apiUrl + 'Question/forum/all-questions');
  }

  // public getAllForumReplies() {
  //   return this.http.get('http://localhost:8080/forum/all-replies');
  // }

  public postQuestion(post_question: any) {
    return this.http.post(
      environment.apiUrl + 'Question/forum/post/question',
      post_question
    );
  }

  public postReply(post_reply: any) {
    return this.http.post(
      environment.apiUrl + 'Reply/forum/post/reply',
      post_reply
    );
  }

  public findNoteparEtudaint(id: number) {
    return this.http.get(environment.apiUrl + 'Note/findNoteparEtudaint/' + id);
  }

  public findDevoirparFormateur(id: number) {
    return this.http.get(
      environment.apiUrl + 'Devoir/findDevoirparFormateur/' + id
    );
  }

  public findDepot_devoirsparEtudiant(id: number) {
    return this.http.get(
      environment.apiUrl + 'DepotDevoir/findDepot_devoirsparEtudiant/' + id
    );
  }

  public findDepotDevoirparFormateur(id: number) {
    return this.http.get(
      environment.apiUrl + 'DepotDevoir/findDepotDevoirparFormateur/' + id
    );
  }

  public AddNote(datanote: any) {
    return this.http.post(environment.apiUrl + 'Note/AddNote', datanote);
  }

  //Quiz

  public getQuiz(idchapiter: any) {
    return this.http.get<any>(
      environment.apiUrl +
        'Quiz_Question/listQuiz_QuestionparChapiter/' +
        idchapiter
    );
  }

  public AjouterQuestion(question: any) {
    return this.http.post(
      environment.apiUrl + 'Quiz_Question/AjouterQuestion',
      question
    );
  }

  public AjouterOption(option: any) {
    return this.http.post(
      environment.apiUrl + 'Quiz_Question/AjouterOption',
      option
    );
  }

  listQuiz_QuestionparCode(code: any) {
    return this.http.get(
      environment.apiUrl + 'Quiz_Question/listQuiz_QuestionparCode/' + code
    );
  }

  CountListQuiz(chapiterid: any) {
    return this.http.get(
      environment.apiUrl + 'Quiz_Question/CountListQuiz/' + chapiterid
    );
  }

  CountNote(idUser: any, chapiterid: any) {
    return this.http.get(
      environment.apiUrl +
        'Quiz_Question/CountNote/' +
        idUser +
        '/' +
        chapiterid
    );
  }

  public AddQuizNote(QuizNote: any) {
    return this.http.post(
      environment.apiUrl + 'Quiz_Question/AddQuizNote',
      QuizNote
    );
  }

  public UpdateQuizNote(QuizNote: any) {
    return this.http.put(
      environment.apiUrl + 'Quiz_Question/UpdateQuizNote',
      QuizNote
    );
  }

  countdepotdevoir(iduser: any, devoirid: any) {
    return this.http.get(
      environment.apiUrl +
        'DepotDevoir/countdepotdevoir/' +
        iduser +
        '/' +
        devoirid
    );
  }

  countNoteDevoir(iduser: any, devoirid: any) {
    return this.http.get(
      environment.apiUrl + 'Note/countNoteDevoir/' + iduser + '/' + devoirid
    );
  }

  ModifierForumPost(datamodifier: any, idquestion: any) {
    return this.http.put(
      environment.apiUrl + 'Question/ModifierForumPost/' + idquestion,
      datamodifier
    );
  }

  DeleteForumPost(idquestion: any) {
    return this.http.delete(
      environment.apiUrl + 'Question/deleteForumPost/' + idquestion
    );
  }

  ModifierForumReply(datamodifier: any, idreply: any) {
    return this.http.put(
      environment.apiUrl + 'Reply/ModifierForumReply/' + idreply,
      datamodifier
    );
  }

  DeleteForumReply(idReply: any) {
    return this.http.delete(
      environment.apiUrl + 'Reply/deleteForumReply/' + idReply
    );
  }
}
