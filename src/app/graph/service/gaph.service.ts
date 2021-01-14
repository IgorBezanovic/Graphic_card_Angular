import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardList } from '../model/card-list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Card } from '../model/card';
import { CommentList } from '../model/comment-list';
import { Comment } from '../model/comment'

const baseUrl = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class GaphService {

  constructor(private http :HttpClient) { }

  getAll(params? :any) :Observable<CardList>{
    let queryParams = {};
    if(params){
      queryParams = {params : new HttpParams()
        .set('page', params.page && params.page.toString() || "")
        .set('pageSize', params.pageSize && params.pageSize.toString() || "")
      }
    }

    return this.http.get(baseUrl, queryParams).pipe(map( 
      response => { return new CardList(response); }
    ));
  }

  update(editedCard :Card) :Observable<Card>{
    return this.http.put(baseUrl + "/" + editedCard._id, editedCard).pipe(map(
      response => { return new Card(response); }
    ));
  }
  
  getComment(id: number) :Observable<CommentList>{
    return this.http.get(baseUrl + "/" + id + "/comments").pipe(map( data => {
      return new CommentList(data);
    }));
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post(baseUrl + "/" + comment.cards + "/comments", comment).pipe(map(res => {
      return new Comment(res);
    }));
  }

}
