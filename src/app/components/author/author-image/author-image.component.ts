import { Component, Input, OnInit } from '@angular/core';
import { AuthorImage } from 'src/app/models/author/authorImage';
import { AuthorImageService } from 'src/app/services/authorImage/authorImage.service';

@Component({
  selector: 'app-author-image',
  templateUrl: './author-image.component.html',
  styleUrls: ['./author-image.component.css']
})
export class AuthorImageComponent implements OnInit {

  authorImage:AuthorImage
  @Input() id :number;
  apiUrl = "https://localhost:44323/img/";


  constructor(private authorImageService:AuthorImageService) { }

  ngOnInit() {
    this.getAuthorImagesByBookId(this.id)
  }
  getAuthorImagesByBookId(id:number){
    this.authorImageService.getBookImageByBookId(id).subscribe(response=>{
      this.authorImage=response.data;
    })
  }

}
