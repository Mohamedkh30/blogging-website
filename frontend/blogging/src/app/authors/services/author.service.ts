import { Injectable } from '@angular/core';
import { AuthorData } from 'src/app/_model/AuthorData';
import { TopicCardData } from 'src/app/_model/TopicCardData';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors:AuthorData[]= [
    new AuthorData("1","Hamada Hamada Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem",[
      new TopicCardData("3","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
    ]),
    new AuthorData("2","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo inventore quibusdam molestiae dolorum voluptas, ratione, quaerat exercitationem amet assumenda, excepturi asperiores iusto nostrum eligendi cum. Explicabo dolor recusandae laudantium.",[]),
    new AuthorData("3","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem",[
      new TopicCardData("1","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
      new TopicCardData("2","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),

    ]),
    new AuthorData("4","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem",[
      new TopicCardData("1","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
      new TopicCardData("2","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
      new TopicCardData("3","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"]),
      new TopicCardData("4","galaxy","hamada","1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur dolore ad voluptatibus pariatur rem quaerat ex harum molestiae itaque laborum eum rerum necessitatibus recusandae, accusamus sequi, quam cum hic?","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",new Date(2022, 0, 1, 9, 0, 0),["nature","stars"])
    ])
  ]
  constructor() { }

  // getAuthors(){
  //   return this.authors;
  // }

  getAuthor(id:string){
    let author:AuthorData|undefined = this.authors.find(p => p.authorId == id);
    if(author)
      return author
    else
      return new AuthorData();
  }
}
