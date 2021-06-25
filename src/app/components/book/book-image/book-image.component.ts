import { Component, Input, OnInit } from '@angular/core';
import { BookImage } from 'src/app/models/book/bookImage';
import { BookImageService } from 'src/app/services/bookImage/bookImage.service';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {

  bookImage:BookImage
  @Input() id :number;
  apiUrl = "https://localhost:44323/img/";

  constructor(private bookImageService:BookImageService) { }

  ngOnInit() {
    this.getBookImagesByBookId(this.id)
  }
  getBookImagesByBookId(id:number){
    this.bookImageService.getBookImageByBookId(id).subscribe(response=>{
      this.bookImage=response.data;
    })
  }

}
