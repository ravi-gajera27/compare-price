import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InnerScreenComponent } from './inner-screen/inner-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path:'search', component: HomeComponent},
  { path:'search/:text', component: HomeComponent},
  { path: 'compare/:title/:id', component: InnerScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
