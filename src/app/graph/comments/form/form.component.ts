import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/graph/model/comment';
import { GaphService } from '../../service/gaph.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  comentar: Comment;

  @Output() addComment = new EventEmitter();

  constructor(private cardService: GaphService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.comentar = new Comment();
  }

  newComment() {
    this.comentar.cards = parseInt(this.route.snapshot.paramMap.get("id"));
    this.comentar.date = (new Date).toISOString();
    this.cardService.saveComment(this.comentar).subscribe(res => {
      this.comentar = new Comment();
      this.addComment.emit(res);
      console.log("Provera onoga sto salje: ", res);
    });
  }
  
}
