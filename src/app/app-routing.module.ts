import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { TicketsComponent } from './tickets/tickets.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'registrazione',component: RegistrazioneComponent},
  {path: 'tickets',component: TicketsComponent},
  {path:'**', component: LoginComponent},
  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
