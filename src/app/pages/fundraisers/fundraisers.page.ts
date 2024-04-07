/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonSelect, IonSelectOption } from '@ionic/angular'; 

@Component({
  selector: 'app-fundraisers',
  templateUrl: './fundraisers.page.html',
  styleUrls: ['./fundraisers.page.scss'],
})
export class FundraisersPage implements OnInit {
  
  items = [
    { 
      name: 'Zbiórka na prezent dla wychowawcy)', 
      students: [
        "Jan Kowalski",
        "Marek Sobuś",
        "Krystian Baran"
      ],
      votes:[
        true,
        false,
        false
      ]
    },
    { 
      name: 'Zbiórka na znicze', 
      students: [
        "Jan Kowalski",
        "Marek Sobuś",
        "Krystian Baran"
      ],
      votes:[
        false,
        false,
        true
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
