import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/registration', 
    pathMatch: 'full' 
  },
  { 
    path: 'registration', 
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
