import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentList } from '../model/comment-list';
import { GaphService } from '../service/gaph.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentList;

  constructor(private cardService: GaphService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.cardService.getComment(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        res => this.comments = res
      );
    });
  }

  addComment(comment) {
    this.comments.results.push(comment);
    this.comments.count += 1;
  }
}
