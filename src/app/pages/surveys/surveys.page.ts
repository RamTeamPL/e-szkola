/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
})
export class SurveysPage implements OnInit {

  voted2: boolean = false;

  constructor() {}

  ngOnInit() {}

  animate() {
    this.voted2 = true;
    setTimeout(() => {
      this.voted2 = false;
    }, 3000);
  }
}
