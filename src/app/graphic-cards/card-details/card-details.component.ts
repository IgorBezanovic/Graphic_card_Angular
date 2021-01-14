import { Component, OnInit, Input } from '@angular/core';
import { GraphicCard } from '../../model/graphicCard';
import { ActivatedRoute } from '@angular/router';
import { GraphicCardService } from 'src/app/service/graphic-card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() card: GraphicCard;
  
  constructor(private route: ActivatedRoute, private service: GraphicCardService) { }

  ngOnInit(): void {}

  changeGrade(){
    this.service.updateGrade(this.card, this.card._id).subscribe(
      data => {
        this.card = data;
      })
  }

  increaseGrade(){
    this.card.grade ++;
     this.changeGrade();
    }

  decreaseGrade(){
    this.card.grade --;
     this.changeGrade();
    } 
}

    
    

    
  




