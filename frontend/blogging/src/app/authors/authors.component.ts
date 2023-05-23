import { Component,OnInit } from '@angular/core';
import { AuthorCardService } from './services/authorCard.service';
import { AuthorCardData } from '../_model/AuthorCardData';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
authors:AuthorCardData[] =[];
constructor(private authorCardService:AuthorCardService){}

  ngOnInit(): void {
    this.authors=this.authorCardService.getAuthorsCard();
  }




}
