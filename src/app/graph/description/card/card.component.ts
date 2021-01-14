import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../model/card';
import { GaphService } from '../../service/gaph.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()card: Card;
  showMore = false;
  
  constructor(private service: GaphService) { }

  ngOnInit(): void {
  }

  vote(grade: number) {
    let tempCard = new Card(this.card);
    tempCard.grade = grade;
    this.service.update(tempCard).subscribe(res => this.card = res);
  }
}
