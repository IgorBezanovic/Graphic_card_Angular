import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GraphicCardList } from '../model/graphicCardList';
import { CommentList } from '../model/commentList';
import { GraphicCard} from '../model/graphicCard'

const baseUrl = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class GraphicCardService {

  constructor(private http: HttpClient) { }

  getCards(parameters): Observable<GraphicCardList> {

    let queryParams = {}
    if (parameters){
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page || "")
        .set("pageSize", parameters.pageSize || "")    
      }
    }
    return this.http.get(baseUrl, queryParams).pipe(map(x=>{
      return new GraphicCardList(x);
    }))
  }

  getComments(id :number) :Observable <CommentList >{
    return this.http.get(`http://localhost:3000/api/cards/${id}/comments`).pipe(map(
      response => { return new CommentList(response);}
    ))
  }

  updateGrade(card,cardId): Observable <GraphicCard> {
    return this.http.put(`http://localhost:3000/api/cards/${cardId}`, card).pipe(map(
      response => { return new GraphicCard(response)}
    ))
  }
}
