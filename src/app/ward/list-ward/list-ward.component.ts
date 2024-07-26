import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-list-ward',
  templateUrl: './list-ward.component.html',
  styleUrls: ['./list-ward.component.css']
})
export class ListWardComponent implements OnInit{
  listWard : Array<any> = [];
  //Search
  public searchWard : string = '';
  //Page
  public currentPageWard : number = 1
  public totalPageWard : number = 10;
  public pageWard : number = 1;
  // Asc
  public clickCount = 0;

  constructor(private stdSrv: StudentService){}
  ngOnInit(): void {
    this.goToPageWard(this.pageWard);
  }
  OnDeleteWard(idWard: number){
    if(confirm("Are you sure you want to delete it?")){
      this.stdSrv.deleteWard(idWard).subscribe(data =>{
        this.stdSrv.getListWard().subscribe(data =>{
          this.listWard = data
        })
        this.goToPageWard(this.pageWard);
      })
    }
  }
  
  onSearchWard(){
    this.stdSrv.SearchWard(this.searchWard).subscribe(data =>{
      this.listWard = data;
    });
  }

  goToPageWard(pageWard: number){
    this.stdSrv.PageWard(pageWard).subscribe(data =>{
      if(pageWard >= 1 && pageWard <= this.totalPageWard){
        this.currentPageWard = pageWard;
        this.listWard = data;
      }
    });
  }
    handleClickWard(){
      this.clickCount++;
      if(this.clickCount % 2 === 1){
        this.stdSrv.AscWard('w_desc').subscribe(data =>{
          console.log(this.listWard = data)
        })
      }else{
        this.stdSrv.AscWard('').subscribe(data =>{
          console.log(this.listWard = data)
        })
      }
    }
  
}
