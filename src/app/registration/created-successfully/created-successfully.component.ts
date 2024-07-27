import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-created-successfully',
  templateUrl: './created-successfully.component.html',
  styleUrl: './created-successfully.component.scss',
  // standalone: true,
  // imports: [LottieComponent],
})
export class CreatedSuccessfullyComponent {

   animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '/assets/99592.json',
    loop: true,
    autoplay: true
  };
  

}
