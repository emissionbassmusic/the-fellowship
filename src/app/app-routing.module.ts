import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/widgets/landing-page/landing-page.component';
import { LiteraturePageComponent } from 'src/app/widgets/literature-page/literature-page.component';
import { ReflectionPageComponent } from 'src/app/widgets/reflection-page/reflection-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' ,
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'literature',
    component: LiteraturePageComponent
  },
  {
    path: 'daily-reflection',
    component: ReflectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
