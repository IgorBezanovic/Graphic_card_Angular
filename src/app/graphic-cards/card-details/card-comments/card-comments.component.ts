import { Component, OnInit } from '@angular/core';
import { CommentList } from '../../../model/commentList'
import { ActivatedRoute } from '@angular/router';
import { GraphicCardService } from '../../../service/graphic-card.service'

@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.css']
})
export class CardCommentsComponent implements OnInit {

  

  commentList: CommentList;

constructor(private route: ActivatedRoute, private servis: GraphicCardService) { }

  ngOnInit(): void {

    this.route.params.subscribe(      

      data => {
        let paramId = data.id;
        console.log(paramId);
        
      this.servis.getComments(paramId).subscribe(    

          data => {

            this.commentList = data;
            console.log(this.commentList);
          })
       })
  }

}
