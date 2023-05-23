import { Injectable } from '@angular/core';
import { TopicData } from 'src/app/_model/TopicData';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topics:TopicData[]= [
    new TopicData("2","galaxy galaxy","lorem lorem","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),"1","Hamada Hamada Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem"),
    new TopicData("3","galaxy","lorem","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),"2","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem"),
    new TopicData("1","galaxy2","lorem","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),"3","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem"),
    new TopicData("4","galaxy","lorem","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),"4","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem")
  ]
  constructor() { }

  getTopic(id:string){
    let topic:TopicData|undefined = this.topics.find(p => p.topicId == id);
    if(topic)
      return topic
    else
      return new TopicData();
  }
}
