import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { BusinessInformationComponent } from './business-information/business-information.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CreatedSuccessfullyComponent } from './created-successfully/created-successfully.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    BusinessInformationComponent,
    VerificationCodeComponent,
    CreatedSuccessfullyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    PrimengModule
  ]
})
export class RegistrationModule { }
