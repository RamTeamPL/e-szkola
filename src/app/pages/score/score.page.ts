import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  items = [
    { 
      name: 'Quiz z "Barok w Polsce")', 
      students: [
        "Jan Kowalski",
        "Marek Sobuś",
        "Krystian Baran"
      ],
      votes:[
        '100%',
        '83%',
        '77%'
      ]
    },
    { 
      name: `Quiz z "Słówka unit'u 6.2"`, 
      students: [
        "Jan Kowalski",
        "Marek Sobuś",
        "Krystian Baran"
      ],
      votes:[
        '95%',
        '89%',
        '67%'
      ]
    },
    
  ];
  isOpen: boolean[] = [];

  
  constructor() {
    this.items.forEach(() => this.isOpen.push(false));
  }

  toggleVotes(index: number) {
    
    this.isOpen[index] = !this.isOpen[index];
  }

  closeAllLists() {
    this.isOpen.forEach((value, index) => {
      this.isOpen[index] = false;
    });
  }
  

  ngOnInit() {
    
  }

}
