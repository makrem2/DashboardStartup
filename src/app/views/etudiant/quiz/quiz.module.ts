import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { ChangeBgDirective } from './quiz/change-bg.directive';


@NgModule({
  declarations: [
    QuizComponent,
    ChangeBgDirective
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
