import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [{
  path:'Homepage' , component:HomeComponent
},
{
  path:'Aboutuspage' , component:AboutusComponent
},
{
  path:'Contactuspage' , component:ContactusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[HomeComponent,AboutusComponent,ContactusComponent]
