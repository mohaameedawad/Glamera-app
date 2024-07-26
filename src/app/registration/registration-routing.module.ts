import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BusinessInformationComponent } from './business-information/business-information.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CreatedSuccessfullyComponent } from './created-successfully/created-successfully.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },

  { path: 'register', component: RegistrationComponent },

  { path: 'business-info', component: BusinessInformationComponent },

  { path: 'verify-code', component: VerificationCodeComponent },

  { path: 'created-success', component: CreatedSuccessfullyComponent },

  {path: '**' , redirectTo: 'register'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
