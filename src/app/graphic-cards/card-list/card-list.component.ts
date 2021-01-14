import { Component, OnInit } from '@angular/core';
import { GraphicCardList } from '../../model/graphicCardList';
import { ActivatedRoute } from '@angular/router'
import { GraphicCardService} from '../../service/graphic-card.service'


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  parameters = {
    page: '',
    pageSize: ''
  }

  cardList: GraphicCardList;
  cardId: number;


  constructor(private service: GraphicCardService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.updateCards();

    this.route.params.subscribe(
      data => {
        this.cardId = data.id
      }
    )

  }

    updateCards(){

      this.service.getCards(this.parameters).subscribe(
        data => {
          this.cardList = data
          console.log(this.cardList)
         
        },
        error => {
  
         console.log("Error retriving data from server: Reason", error.statusText)
        }
     ) }

    
     sortCards(){
      this.updateCards();
     }
    
    
    }

    

  



