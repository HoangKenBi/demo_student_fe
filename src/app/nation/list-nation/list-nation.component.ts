import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-list-nation',
  templateUrl: './list-nation.component.html',
  styleUrls: ['./list-nation.component.css']
})
export class ListNationComponent implements OnInit{
  listNation : Array<any> = [];
  // Seach
  public searchNation: string = '';
  // SortBy
  public currentPageNation : number = 1;
  public totalPagesNation : number = 10;
  public pageNation : number = 1;
  //ASC
  public clickCount = 0;

  constructor(private stdSrv: StudentService){}
  ngOnInit(): void {
    this.goToPageNation(this.pageNation);
  }
  OnDeleteNation(idNation: number){
    if(confirm("Are you sure you want to delete it?")){
      this.stdSrv.deleteNation(idNation).subscribe(data => {
        this.stdSrv.getListNation().subscribe(data => {
          this.listNation = data
        })
        this.goToPageNation(this.pageNation);
      })
    }
  }
  onSearchNation(){
    this.stdSrv.SearchNation(this.searchNation).subscribe(data => {
      this.listNation = data
    });
  }
  goToPageNation(pageNation: number){
    this.stdSrv.PageNation(pageNation).subscribe(data => {
      if(pageNation >= 1 && pageNation <= this.totalPagesNation){
        this.currentPageNation = pageNation;
        this.listNation = data;
      }
    })
  }
  handleClickNation(){
    this.clickCount++;
    if(this.clickCount % 2 === 1){
      this.stdSrv.AscNation('n_desc').subscribe(data => {
        console.log(this.listNation = data)
      })
    }else{
      this.stdSrv.AscNation('').subscribe( data => {
        console.log(this.listNation = data)
      })
    }
  }

}
