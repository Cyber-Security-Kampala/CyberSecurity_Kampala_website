import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { PROJECTSComponent } from './projects/projects.component';
import { COMMUNITYComponent } from './community/community.component';
import { TRAININGComponent } from './training/training.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'about', component:ABOUTComponent},
  {path: 'projects', component: PROJECTSComponent},
  {path: 'community', component: COMMUNITYComponent},
  {path: 'training', component: TRAININGComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
