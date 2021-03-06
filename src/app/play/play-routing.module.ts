import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionComponent } from './question/question.component';
import { QuestionHostComponent } from './question-host/question-host.component';

const routes: Routes = [{
  path: 'play',
  component: PlayComponent,
  children: [{
      path: 'start',
      component: StartComponent
    },
    {
      path: 'stop',
      component: StopComponent
    },
    {
      path: 'instruction',
      component: InstructionComponent
    },
    {
      path: 'question',
      component: QuestionHostComponent
    },
    {
      path: '',
      redirectTo: 'start',
      pathMatch: 'full'
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
