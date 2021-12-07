import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [

  {path: 'homepage', component: HomeComponent},
  {path: 'Signin', component: SigninComponent},
  {path: 'signup', component: RegistrationformComponent},
  {path: 'admin', component: AdminpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,SigninComponent,RegistrationformComponent,AdminpageComponent]
