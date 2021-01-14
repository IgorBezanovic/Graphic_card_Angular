import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { GaphService } from '../service/gaph.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  cardList :Card[] = [];
  count :number = 0;

  params = {
		page: 1,
		pageSize: 5,
	}
  constructor(private service: GaphService ) { }

  ngOnInit(): void {
    this.refreshCardList();
  }
  sortCards(){
    this.refreshCardList();
  }
  refreshCardList(){
		this.service.getAll(this.params).subscribe(
			cardSearchRes => { 
				this.cardList = cardSearchRes.results;
        this.count = cardSearchRes.count;
        console.log( " Broj kartica: ", this.count)
			}
		);
  }
  changePage(newPage :number){
		this.params.page = newPage;
		this.refreshCardList();
  }
  
  
}
