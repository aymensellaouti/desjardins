import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './components/second.component';
import { CvInfosComponent } from './cv/cv-infos/cv-infos.component';
import { MES_ROUTES } from './config/routes.const';
import { NF404Component } from './components/nf404/nf404.component';

// /word

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: MES_ROUTES.cv, component: CvComponent },
  { path: `${MES_ROUTES.cv}/:id`, component: CvInfosComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },
  { path: '**', component: NF404Component },
  // { path: ':quelqueChose', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
