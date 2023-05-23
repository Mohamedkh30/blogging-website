export class TopicData {
    constructor(public topicId:string="0"
        ,public subject:string=""
        ,public topicText:string=""
        ,public topicImg:string=""
        ,public date:Date=new Date()

        ,public authorId:string=""
        ,public author:string=""
        ,public authorImg:string=""
        ,public authorabout:string=""
        ){
        
    }
}
