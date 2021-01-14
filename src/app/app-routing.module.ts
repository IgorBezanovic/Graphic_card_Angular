import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "graphic_cards", component: GraphicCardsComponent},
  {path: "about", component: AboutComponent},
  {path: "graphicCard/:id", component: GraphicCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
