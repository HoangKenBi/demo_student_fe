import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-list-district',
  templateUrl: './list-district.component.html',
  styleUrls: ['./list-district.component.css']
})
export class ListDistrictComponent implements OnInit{
  listDistrict : Array<any> = [];
  //Search
  public searchDistrict : string = '';
  //Page
  public currentPageDistrict : number = 1
  public totalPageDistrict : number = 10;
  public pageDistrict : number = 1;
  // Asc
  public clickCount = 0;

  constructor(private stdSrv: StudentService){}
  ngOnInit(): void {
    this.goToPageDistrict(this.pageDistrict);
  }
  OnDeleteDistrict(idDistrict: number){
    if(confirm("Are you sure you want to delete it?")){
      this.stdSrv.deleteDistrict(idDistrict).subscribe(data =>{
        this.stdSrv.getListDistrict().subscribe(data =>{
          this.listDistrict = data
        })
        this.goToPageDistrict(this.pageDistrict);
      })
    }
  }
  onSearchDistrict(){
    this.stdSrv.SearchDistrict(this.searchDistrict).subscribe(data =>{
      this.listDistrict = data;
    });
  }
  goToPageDistrict(pageDistrict: number){
    this.stdSrv.PageDistrict(pageDistrict).subscribe(data =>{
      if(pageDistrict >= 1 && pageDistrict <= this.totalPageDistrict){
        this.currentPageDistrict = pageDistrict;
        this.listDistrict = data;
      }
    });
  }
  handleClickDistrict(){
    this.clickCount++;
    if(this.clickCount % 2 === 1){
      this.stdSrv.AscDistrict('d_desc').subscribe(data =>{
        console.log(this.listDistrict = data)
      })
    }else{
      this.stdSrv.AscDistrict('').subscribe(data =>{
        console.log(this.listDistrict = data)
      })
    }
  }

}
