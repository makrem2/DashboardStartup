import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceFormateurService } from 'src/app/services/data-service-formateur.service';
import { interval } from 'rxjs';
import { AuthAdminService } from 'src/app/services/auth-admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  idchapiter: any;
  questionlist: any = [];
  currentQuestion: number = 0;
  points: any = 0;
  counter = 15;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  userid: any;
  scorequiz: any;
  QuizScore = {
    score: 0,
    userid: 0,
    chapiterId: 0,
  };

  quiz: boolean = false;
  notequiz: any;
  username: any;
  constructor(
    private dataservice: DataServiceFormateurService,
    private Activatedroute: ActivatedRoute,
    private authadmin: AuthAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCounter();
    this.userid = this.authadmin.getUserid();
    this.username = localStorage.getItem('username');
  }

  getAllQuestions() {
    this.idchapiter =
      this.Activatedroute.snapshot.queryParamMap.get('Quiz') || 0;

    this.dataservice.getQuiz(this.idchapiter).subscribe((res) => {
      //console.log(res);
      this.questionlist = res;
    });
  }

  // nextQuestion() {
  //   this.currentQuestion++;
  // }
  // previousQuestion() {
  //   this.currentQuestion--;
  // }

  answer(currentQuestion: number, item: any) {
    if (currentQuestion === this.questionlist.length) {
      this.isQuizCompleted = true;

      const Data = new FormData();
      Data.append('score', this.points);
      Data.append('userid', this.userid);
      Data.append('chapiterId', this.idchapiter);

      this.dataservice.UpdateQuizNote(Data).subscribe(
        (data) => {
          this.ngOnInit();
          this.router.navigate(['etudiant/coursedetails'], {
            queryParams: { FormationId: this.idchapiter },
          });
        },
        (err: HttpErrorResponse) => {
          //console.log(err.error)
        }
      );

      this.StopCounter();
    }
    if (item.correct) {
      this.points += 10;
      //  this.points = this.points + 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }

  startCounter() {
    this.interval = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 15;
        this.points -= 10;
      }
    });

    setTimeout(() => {
      this.interval.unsubscribe();
    }, 600000);
  }
  StopCounter() {
    this.interval.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.StopCounter();
    this.counter = 15;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 15;
    this.currentQuestion = 0;
  }

  getProgressPercent() {
    this.progress = (
      (this.currentQuestion / this.questionlist.length) *
      100
    ).toString();
    return this.progress;
  }

  Score() {
    const Data = new FormData();
    Data.append('score', this.points);
    Data.append('userid', this.userid);
    Data.append('chapiterId', this.idchapiter);

    this.dataservice.UpdateQuizNote(Data).subscribe(
      (data) => {
        this.ngOnInit();
        this.router.navigate(['etudiant/coursedetails'], {
          queryParams: { FormationId: this.idchapiter },
        });
      },
      (err: HttpErrorResponse) => {
        //console.log(err.error)
      }
    );
  }
}
