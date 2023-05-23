import { Component,Input } from '@angular/core';
import { AuthorCardData } from 'src/app/_model/AuthorCardData';

@Component({
  selector: 'app-AuthorCard',
  templateUrl: './Authorcard.component.html',
  styleUrls: ['./Authorcard.component.css']
})
export class AuthorCardComponent {
  @Input() author:AuthorCardData = new AuthorCardData();
}
