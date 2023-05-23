import { Component } from '@angular/core';
import { TopicsService } from './services/topics.service';
import { TopicCardData } from '../_model/TopicCardData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public topicsService:TopicsService){}

  topics:TopicCardData[]=this.topicsService.getTopics();

}
