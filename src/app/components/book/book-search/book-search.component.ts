import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  textFilter="";

  
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getActivesFromParams();
  }
  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['textFilter']) this.textFilter = params['textFilter'];
    });
  }

}
