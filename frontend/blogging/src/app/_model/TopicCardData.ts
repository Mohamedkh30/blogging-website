export class TopicCardData {
    constructor(public topicId:string="0"
        ,public subject:string=""
        ,public author:string=""
        ,public authorId:string="0"
        ,public intro:string=""
        ,public img:string=""
        ,public date:Date=new Date()
        ,public tags:string[]=["asd","asdad"]
        ){
        
    }
}
