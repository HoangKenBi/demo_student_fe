import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{
  listStudent : Array<any> = [];
  //Search
  public searchStudent : string = '';
  //Page
  public currentPageStudent : number = 1
  public totalPageStudent : number = 10;
  public pageStudent : number = 1;
  // Asc
  public clickCount = 0;

  constructor(private stdSrv: StudentService){}

  ngOnInit(): void {
    // this.stdSrv.getListStudent().subscribe(data => {
    //   this.listStudent = data
    // })
    this.goToPageStudent(this.pageStudent);
  }
  OnDeleteStudent(idStudent : number){
    if(confirm("Are you sure you want to delete it?")){
      this.stdSrv.deleteStudent(idStudent).subscribe(data => {
        this.stdSrv.getListStudent().subscribe(data => {
          this.listStudent = data
        })
        this.goToPageStudent(this.pageStudent);
      })
    }
  }
  onSearchStudent(){
    this.stdSrv.SearchStudent(this.searchStudent).subscribe(data => {
      this.listStudent = data;
    });
  }
  goToPageStudent(pageStudent : number){
    this.stdSrv.PageStudent(pageStudent).subscribe(data => {
      if(pageStudent >= 1 && pageStudent <= this.totalPageStudent){
        this.currentPageStudent = pageStudent;
        this.listStudent = data;
      }
    });
  }
  handleClickStudentName(){
    this.clickCount++;
    if(this.clickCount % 2 === 1){
      this.stdSrv.AscStudent('s_desc').subscribe(data =>{
        this.listStudent = data
      })
    }else{
      this.stdSrv.AscStudent('').subscribe(data =>{
        this.listStudent = data
      })
    }
  }
  handleClickStudentBirth(){
    this.clickCount++;
    if(this.clickCount % 2 === 1){
      this.stdSrv.AscStudent('b_desc').subscribe(data =>{
        this.listStudent = data
      })
    }else{
      this.stdSrv.AscStudent('b_asc').subscribe(data =>{
        this.listStudent = data
      })
    }
  }
}
