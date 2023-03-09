import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';
import { FourOhFourComponent } from './component/four-oh-four/four-oh-four.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'works', component: WorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
