import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { CvInfosComponent } from './cv/cv-infos/cv-infos.component';
import { MES_ROUTES } from './config/routes.const';
import { LoginComponent } from './auth/login/login.component';
// /word
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: MES_ROUTES.cv, component: CvComponent },
  { path: `${MES_ROUTES.cv}/:id`, component: CvInfosComponent },
  { path: `${MES_ROUTES.login}`, component: LoginComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },
  // { path: ':quelqueChose', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
