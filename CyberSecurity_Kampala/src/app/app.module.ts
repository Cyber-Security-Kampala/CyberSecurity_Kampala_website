import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DecoComponent } from './deco/deco.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatStepperModule } from '@angular/material/stepper';
import { WeDoComponent } from './we-do/we-do.component';
import { ABOUTComponent } from './about/about.component';
import { PROJECTSComponent } from './projects/projects.component';
import { COMMUNITYComponent } from './community/community.component';
import { TRAININGComponent } from './training/training.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DecoComponent,
    IntroductionComponent,
    FooterComponent,
    TeamComponent,
    WeDoComponent,
    ABOUTComponent,
    PROJECTSComponent,
    COMMUNITYComponent,
    TRAININGComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    ScrollingModule,
    MatStepperModule
  ],
  exports: [
    // Export MatStepperModule if you want to use the stepper in other modules
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
