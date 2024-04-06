import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public schoolLabels = [
    { title: 'Konkursy', url: '/folder/competitions', icon: 'trophy' },
    { title: 'Ogłoszenia', url: '/folder/Ogłoszenia', icon: 'paper-plane' },
    { title: 'Dokumenty', url: '/folder/Dokumenty', icon: 'file-tray-full' },
    { title: 'Biblioteka', url: '/folder/Biblioteka', icon: 'library' },
  ];
  public schoolerLabels = [
    { title: 'Ankiety', url: '/folder/Ankiety', icon: 'pie-chart' },
    { title: 'Zbiórki', url: '/folder/Zbiórki', icon: 'cash' },
    { title: 'Ogłoszenia', url: '/folder/classAnnouncements', icon: 'paper-plane' },
    { title: 'Samorząd', url: '/folder/Samorząd', icon: 'people' },
    { title: 'Wycieczki', url: '/folder/Wycieczki', icon: 'bus' },
    { title: 'Nauka', url: '/folder/Nauka', icon: 'book' },
  ];
  constructor() {}
}
