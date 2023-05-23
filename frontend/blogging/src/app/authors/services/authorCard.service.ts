import { Injectable } from '@angular/core';
import { AuthorCardData } from 'src/app/_model/AuthorCardData';

@Injectable({
  providedIn: 'root'
})
export class AuthorCardService {

  private authors:AuthorCardData[]= [
    new AuthorCardData("1","Hamada Hamada Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem"),
    new AuthorCardData("2","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo inventore quibusdam molestiae dolorum voluptas, ratione, quaerat exercitationem amet assumenda, excepturi asperiores iusto nostrum eligendi cum. Explicabo dolor recusandae laudantium."),
    new AuthorCardData("3","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem"),
    new AuthorCardData("4","Hamada","https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg","lorem")
  ]
  constructor() { }

  getAuthorsCard(){
    return this.authors;
  }

  getAuthorCard(id:string){
    let author:AuthorCardData|undefined = this.authors.find(p => p.authorId == id);
    if(author)
      return author
    else
      return new AuthorCardData();
  }


}
