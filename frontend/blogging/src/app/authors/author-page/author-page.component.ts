import { Component, OnInit } from '@angular/core';

import { AuthorData } from 'src/app/_model/AuthorData';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit{
  author:AuthorData = new AuthorData();
  authorId:string="";
  constructor(private authorService:AuthorService, private ac:ActivatedRoute){}
  
  ngOnInit(): void {
    this.authorId = this.ac.snapshot.params['id'];
    this.author = this.authorService.getAuthor(this.authorId)
  }


}
