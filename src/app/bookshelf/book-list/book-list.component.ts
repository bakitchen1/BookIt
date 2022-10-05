
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() currentBookSelected = new EventEmitter<Book>();
  myBooks: Book[] = [
    new Book(
      "Test Book",
      "Ben Kitchen",
      "Mystery",
      "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg"
    ),
    new Book(
      "Test Book",
      "Ben Kitchen",
      "Mystery",
      "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg"
    ),
    new Book(
      "Test Book",
      "Ben Kitchen",
      "Mystery",
      "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg"
    )

  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleBookSelected(book: Book) {
    console.log('blist:', )
  }

}
