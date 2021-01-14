import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentList } from '../../model/comment-list';
import { GaphService } from '../../service/gaph.service';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {
  commentList: CommentList;
  
  constructor(private route: ActivatedRoute, private service: GaphService) { }

  ngOnInit(): void {
    this.route.params.subscribe( data => {
      let paramId = data['id'];
      console.log(paramId);
      this.service.getComment(paramId).subscribe(data => {
          this.commentList = data;
          console.log(this.commentList);
        })
     })
  }
}
