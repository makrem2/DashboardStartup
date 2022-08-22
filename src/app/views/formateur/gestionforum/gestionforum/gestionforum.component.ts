import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-gestionforum',
  templateUrl: './gestionforum.component.html',
  styleUrls: ['./gestionforum.component.css'],
})
export class GestionforumComponent implements OnInit {

  searchText: any;
  p: number = 1;
  preply: number = 1;
  dataQuestion: any = [];
  new_reply_text: any;
  messageSuccessPoser: any;
  messageSuccessReply:any
  messageErrorReply:any
  messageErrorPoser: any;
  userID: any;
  QuestionId: any;
  constructor(private DataService: DataServiceFormateurService,
    private notifyService: NotificationService) {
    this.userID = localStorage.getItem('tokenid');
  }

  ngOnInit(): void {
    this.DataService.getAllForumQuestions().subscribe(
      (data) => (this.dataQuestion = data)
    );
  }


  ResetMessage(){
    this.messageSuccessPoser=''
    this.messageSuccessReply=''
    this.messageErrorReply=''
    this.messageErrorPoser=''
  }


  Poser(p: any) {
    let data = new FormData();

    data.append('topic', p.value.topic);
    data.append('content', p.value.content);
    data.append('timestamp', this.getCurrentTime());
    data.append('iduser', this.userID);

    this.DataService.postQuestion(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessPoser = 'Question enregistré avec succès:';
        this.notifyService.showSuccess(this.messageSuccessPoser,'Success')
        p.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageErrorPoser = "'Impossible d'enregistré la Question'";
        this.notifyService.showError(this.messageErrorPoser,'Error')
      }
    );
  }

  GetQuestionId(id: any) {
    this.QuestionId = id;
  }

  Reply(r: any) {
    let data = new FormData();

    data.append('content', r.value.contentReply);
    data.append('timestamp', this.getCurrentTime());
    data.append('iduser', this.userID);
    data.append('IdQuestion',this.QuestionId);
  
    this.DataService.postReply(data).subscribe(
      (data) => {
        this.ngOnInit();
        this.messageSuccessReply = 'Réponse enregistré avec succès:';
        this.notifyService.showSuccess(this.messageSuccessReply,'Success')
        r.resetForm();
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
        this.messageErrorReply = "'Impossible d'enregistré la Réponse'";
        this.notifyService.showError(this.messageErrorReply,'Error')
      }
    );
  }

  getCurrentTime(): string {
    let minute: string = new Date().getMinutes().toString();
    if (+minute < 10) {
      minute = '0' + minute;
    }
    let hour: string = new Date().getHours().toString();
    if (+hour < 10) {
      hour = '0' + hour;
    }
    return hour + ':' + minute;
  }
}