import { Component,Input } from '@angular/core';
import { TopicCardData } from 'src/app/_model/TopicCardData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() topic:TopicCardData= new TopicCardData();
}
