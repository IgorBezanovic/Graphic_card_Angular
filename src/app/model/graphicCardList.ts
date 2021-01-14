import { GraphicCard } from './graphicCard';

export class GraphicCardList {
  
    count: number;
    results: GraphicCard[];
  
    constructor(obj? :any){
      this.count = obj && obj.count;
      this.results= obj.results || [];
    }
  
  }