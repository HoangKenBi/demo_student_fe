import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{
  constructor (private stdSrv: StudentService, private router: Router){}

  addFormStudent : FormGroup = new FormGroup({
    nameStudent: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/)]),
    phoneStudent: new FormControl('', [Validators.required, Validators.pattern(/^0+[0-9]{9}$/)]),
    emailStudent: new FormControl('', [Validators.required, Validators.email]),
    birthDayStudent: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    idNation: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
    idCity: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
    idDistrict: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
    idWard: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
  });

  ngOnInit(): void {
  }
  onCreateStudent(){
    if (this.addFormStudent.invalid) {return}
    this.stdSrv.createStudent(this.addFormStudent.value).subscribe(data =>{
      console.log(data);
      if(confirm("You have added success!")){
        this.router.navigate(['/home/list-student']);
      }
    })
  }
}
