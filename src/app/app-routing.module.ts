import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'top', component: TopComponent},
  {path: 'a-propos', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
