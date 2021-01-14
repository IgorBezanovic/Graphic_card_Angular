export class Comment {

    _id: number;
    cards: number;
    text: string;
    author: string;
    date: string;
    
    constructor(obj? : any){
        this._id = obj && obj._id || null;
        this.cards = obj && obj.cards || "";
        this.text = obj && obj.text || "";
        this.author = obj && obj.author || "";
        this.date = obj && obj.date || "";
      }


}