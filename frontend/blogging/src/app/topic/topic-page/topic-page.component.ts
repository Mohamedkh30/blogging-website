import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopicService } from '../services/topic.service';
import { TopicData } from 'src/app/_model/TopicData';
import { AuthorCardData } from 'src/app/_model/AuthorCardData';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  topicId:string="";
  topic:TopicData=new TopicData();
  author:AuthorCardData = new AuthorCardData();
  constructor(private topicService:TopicService,private ac:ActivatedRoute){}

  ngOnInit(): void {
    this.topicId=this.ac.snapshot.params['id'];
    this.topic = this.topicService.getTopic(this.topicId);
    this.author = new AuthorCardData (this.topic.authorId,this.topic.author,this.topic.authorImg,this.topic.authorabout)
    console.log(this.topic);
  }
}
