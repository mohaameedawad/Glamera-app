import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  countries = [
    { code: '+966', flag: 'assets/ksa-flag.png' },
    { code: '+20', flag: 'assets/egypt-flag.png' },
  ];
  selectedCountry = this.countries[0]; // Default selected country


  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Accepts only numbers
      password: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],

    });
  }

  ngOnInit(): void {
  }

  hasError(controlName: string, errorName: string) {
    const control = this.registrationForm.get(controlName);
    return control?.touched && control?.hasError(errorName);
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      let formValue = {...this.registrationForm.value};
      formValue.phone = this.selectedCountry.code + formValue.phone;
      console.log(formValue);
      this.router.navigate(['/registration/business-info']);
    }
  }
}
