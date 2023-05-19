import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NF404Component } from '../components/nf404/nf404.component';

// /word

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NF404Component },
  // { path: ':quelqueChose', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
