import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "cards", component: GraphComponent},
  {path: "cards/:id", component: GraphComponent},
  {path: "about", component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
