import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.scss']
})
export class BusinessInformationComponent implements OnInit {
toggleDropdown() {
throw new Error('Method not implemented.');
}

  BusinessForm!: FormGroup;
  selectedType: number | null = null;
  selectedGovernorate: {id: number, name: string} | null = null;
  cities: {id: number, name: string}[] = [];
  selectedOption: { value: string, label: string, icon: string } | null = null;

  businessTypes = [
    { id: 1 , name: 'Salon', imgSrc: 'assets/salon.svg' },
    { id: 2 , name: 'Gym', imgSrc: 'assets/Gym.svg' },
    { id: 3 , name: 'Spa', imgSrc: 'assets/Spa.svg' },
    { id: 4 , name: 'Clinic', imgSrc: 'assets/clinic.svg' }
  ];

  Governorates = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' }
  ];

  Cities: { [key: string]: { id: number, name: string }[] } = {
    '1': [
      { id: 1, name: 'Cairo' },
      { id: 2, name: 'Alexandria' }
    ],
    '2': [
      { id: 3, name: 'Riyadh' },
      { id: 4, name: 'Jeddah' }
    ]
  };

  howDidYouKnowUsOptions = [
    { value: 'facebook', label: 'Facebook', icon: 'assets/facebook.svg' },
    { value: 'twitter', label: 'Twitter', icon: 'assets/twitter.svg' },
    { value: 'friend', label: 'Friend', icon: 'assets/friend.svg' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
  }
  
  ngOnInit(): void {
    this.BusinessForm = this.fb.group({
      CompanyName: ['Glamera', Validators.required],
      BusinessType: ['', Validators.required],
      Governorate: ['', Validators.required],
      City: ['', Validators.required],
      HowDidYouKnowUs: ['', Validators.required],
      UsingSystem: ['', Validators.required], 
    });
  }

  hasError(controlName: string, errorName: string) {
    const control = this.BusinessForm.get(controlName);
    return control?.touched && control?.hasError(errorName);
  }

  toggleSelection(typeId: number): void {
    if (this.selectedType === typeId) {
      this.selectedType = null;
      this.BusinessForm.get('BusinessType')?.setValue('');
    } else {
      this.selectedType = typeId;
      this.BusinessForm.get('BusinessType')?.setValue(typeId);
    }
  }

  selectGovernorate(event: any): void {
   let governorateId = event.target.value
    this.selectedGovernorate = this.Governorates.find(gov => gov.id === governorateId) || null;
    this.BusinessForm.get('Governorate')?.setValue(governorateId);
    this.cities = this.Cities[governorateId];
    this.BusinessForm.get('City')?.setValue('');
  }

  selectOption(option: { value: string, label: string, icon: string }): void {
    this.selectedOption = option;
    this.BusinessForm.get('HowDidYouKnowUs')?.setValue(option.value);
  }

  onSubmit(): void {
    if (this.BusinessForm.valid) {
      // Handle form submission
    }

    this.router.navigate(['/registration/verify-code']);

  }
}
