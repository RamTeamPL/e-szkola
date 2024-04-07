import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  constructor() { 
  }
  // API_URL = "https://wolnelektury.pl/api/books/?format=api";
  // data: any;
  // books: [] = [];

  ngOnInit() {
    // fetch(this.API_URL)
    //   .then((response) => response.json())
    //   .then((quotesData) => (this.data = quotesData))
    //   .then((data) => this.books)
      
  }
  searchTerm: string = '';

  books = [
    {title: 'Pan Tadeusz', author: 'Adam Mickiewicz', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/pan-tadeusz_1fNZm7P.jpg'},
    {title: 'Quo Vadis', author: 'Henryk Sienkiewicz', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/quo-vadis_GDnK4W7.jpg'},
    {title: 'Lord Jim', author: 'Joseph Conrad', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/lord-jim_Uu4uR1r.jpg'},
    {title: 'Ludzie bezdomni', author: 'Stefan Żeromski', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/ludzie-bezdomni_OtChxtv.jpg'},
    {title: 'Pan Tadeusz', author: 'Adam Mickiewicz', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/pan-tadeusz_1fNZm7P.jpg'},
    {title: 'Quo Vadis', author: 'Henryk Sienkiewicz', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/quo-vadis_GDnK4W7.jpg'},
    {title: 'Lord Jim', author: 'Joseph Conrad', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/lord-jim_Uu4uR1r.jpg'},
    {title: 'Ludzie bezdomni', author: 'Stefan Żeromski', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/ludzie-bezdomni_OtChxtv.jpg'},
    {title: 'Pan Tadeusz', author: 'Adam Mickiewicz', image: 'https://wolnelektury.pl/media/book/cover_api_thumb/pan-tadeusz_1fNZm7P.jpg'},
  ]

  searchBooks(): any[] {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  // getHalfOfItems(): any[] {
  //   const middleIndex = Math.ceil(this.books.length / 2);
  //   return this.books.slice(0, middleIndex);
  // }
  

  

}
