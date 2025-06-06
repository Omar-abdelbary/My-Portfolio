import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkgalleryComponent } from './workgallery/workgallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: "home" , component: HomeComponent } ,
  {path: "" , component: HomeComponent } ,
  {path: "about" , component: AboutComponent } ,
  {path: "workgallery" , component: WorkgalleryComponent } ,
  {path: "**" , component: NotfoundComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
