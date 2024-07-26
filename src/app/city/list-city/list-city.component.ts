import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit{
  listCity : Array<any> = [];
  //Search
  public searchCity : string = '';
  //page
  public currentPageCity : number = 1
  public totalPagesCity : number = 10;
  public pageCity  : number = 1;
  // asc
  public clickCount = 0;

  constructor(private stdSrv: StudentService){}

  ngOnInit(): void {
    this.goToPageCity(this.pageCity);
  }
  OnDeleteCity(idCity: number){
    if(confirm("Are you sure you want to delete it?")){
      this.stdSrv.deleteCity(idCity).subscribe(data => {
        this.stdSrv.getListCity().subscribe(data => {
          this.listCity = data
        })
        this.goToPageCity(this.pageCity);
      })
    }
  }
  onSearchCity(){
    this.stdSrv.SearchCity(this.searchCity).subscribe(data => {
      this.listCity = data;
    })
  }
  goToPageCity(pageCity : number){
    this.stdSrv.PageCity(pageCity).subscribe(data => {
      if(pageCity >= 1 && pageCity <= this.totalPagesCity){
        this.currentPageCity = pageCity;
        this.listCity = data;
      }
    })
  }
  handleClickCity(){
    this.clickCount++;
    if(this.clickCount % 2 === 1){
      this.stdSrv.AscCity('c_desc').subscribe(data => {
        console.log(this.listCity = data)
      })
    }else{
      this.stdSrv.AscCity('').subscribe(data => {
        console.log(this.listCity = data)
      })
    }
  }

}
