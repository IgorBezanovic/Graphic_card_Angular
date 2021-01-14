import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems :number;
	@Input() pageSize :number;	
  @Output() onPageSelected :EventEmitter<number>;
	pages :number[];
  activePage :number = 1;

  constructor() { this.onPageSelected = new EventEmitter(); }

  ngOnInit(): void {
  }

  getNoPages() :number{
    return Math.ceil(this.totalItems/this.pageSize);
  }

  ngOnChanges(){
    this.pages = [];
    for(let i=1; i<=this.getNoPages(); i++){
      this.pages.push(i);
    }
    console.log("Total items: ", this.totalItems);
    console.log("Page size: ", this.pageSize);
  }

  pageSelected(newPage :number){
    if(newPage >= 1 && newPage <= this.getNoPages()){
      this.activePage = newPage;
      this.onPageSelected.emit(this.activePage);
    }  
    console.log("Active page set to: ", this.activePage);  
  }
}
