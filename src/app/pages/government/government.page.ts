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
    this.voted = true;
    setTimeout(() => {
      this.voted = false;
    }, 3000);
}}