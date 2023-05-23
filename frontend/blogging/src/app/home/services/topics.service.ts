import { Injectable } from '@angular/core';
import { TopicCardData } from 'src/app/_model/TopicCardData';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private topics:TopicCardData[]= [
    new TopicCardData("1","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
    new TopicCardData("2","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
    new TopicCardData("3","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
    new TopicCardData("4","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"])
  ]
  constructor() { }

  getTopics(){
    return this.topics;
  }
}
