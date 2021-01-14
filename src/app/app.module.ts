import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './graph/description/description.component';
import { GraphComponent } from './graph/graph.component';
import { CommentsComponent } from './graph/comments/comments.component';
import { ComComponent } from './graph/comments/com/com.component';
import { PaginationComponent } from './graph/description/pagination/pagination.component';
import { CardComponent } from './graph/description/card/card.component';
import { FormComponent } from './graph/comments/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    DescriptionComponent,
    GraphComponent,
    CommentsComponent,
    ComComponent,
    PaginationComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
