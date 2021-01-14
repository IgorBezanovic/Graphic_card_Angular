import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { CardListComponent } from './graphic-cards/card-list/card-list.component';
import { CardDetailsComponent } from './graphic-cards/card-details/card-details.component';
import { CardCommentsComponent } from './graphic-cards/card-details/card-comments/card-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    GraphicCardsComponent,
    CardListComponent,
    CardDetailsComponent,
    CardCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
