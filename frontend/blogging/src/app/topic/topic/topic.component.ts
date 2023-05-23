import { Component,Input } from '@angular/core';
import { TopicData } from 'src/app/_model/TopicData';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent  {
  @Input()  topic:TopicData=new TopicData();
}
