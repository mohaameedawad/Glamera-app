import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.scss'
})
export class VerificationCodeComponent implements OnInit {
  counter: number = 59;
  intervalId: any;
  code = ['', '', '', ''];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  moveToNext(event: any) {
    const nextInput = event.target.nextElementSibling;
    if (nextInput && nextInput.tagName === 'INPUT') {
      nextInput.focus();
    }
  }

  isButtonDisabled(): boolean {
    return this.code.find(input => input === '') !== undefined;
  }

  close() {
    this.router.navigate(['/registration/business-info']);
  }
  
  verify() {
    this.router.navigate(['/registration/created-success']);
  }
}
