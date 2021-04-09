import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PrincipalComponent } from './principal/principal.component';
import { TreballsComponent } from './treballs/treballs.component';



const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'treballs', component: TreballsComponent},
  {path: 'curriculum', component: CurriculumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
