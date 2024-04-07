import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-government',
  templateUrl: './government.page.html',
  styleUrls: ['./government.page.scss'],
})
export class GovernmentPage implements OnInit {
  voted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.voted = true; // Update voted when animation starts
    setTimeout(() => {
      this.voted = false; // Reset voted after animation completes
    }, 3000); // Adjust this value to match the duration of your animation
  }
}