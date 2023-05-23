import { TopicCardData } from "./TopicCardData";
export class AuthorData {
    constructor(
        public authorId:string=""
        ,public author:string=""
        ,public authorImg:string=""
        ,public authorabout:string=""
        ,public topicList:TopicCardData[] = []
        ){
        
    }
}
