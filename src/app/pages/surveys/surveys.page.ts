/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
})
export class SurveysPage implements OnInit {
  constructor() {}

  voted: boolean = false;

  ngOnInit() {}

  animate() {
    this.voted = true; // Update voted when animation starts
    setTimeout(() => {
      this.voted = false; // Reset voted after animation completes
    }, 3000); // Adjust this value to match the duration of your animation
  }
}
