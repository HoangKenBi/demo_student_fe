import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  idStudent : number = 0;
  nameStudent: string = '';
  phoneStudent: string = '';
  emailStudent: string = '';
  birthDayStudent: string = '';
  idNation: string = '';
  idCity: string = '';
  idDistrict: string = '';
  idWard: string = '';

  constructor(private stdSrv: StudentService, private _route: ActivatedRoute, private router: Router){}
  editFormStudent : FormGroup = new FormGroup({
    nameStudent: new FormControl(),
    phoneStudent: new FormControl(),
    emailStudent: new FormControl(),
    birthDayStudent: new FormControl(),
    idNation: new FormControl(),
    idCity: new FormControl(),
    idDistrict: new FormControl(),
    idWard: new FormControl(),
  });
  ngOnInit(): void {
    this.idStudent = this._route.snapshot.params['idStudent'];
    this.stdSrv.getOneStudent(this.idStudent).subscribe(data =>{
      this.editFormStudent = new FormGroup({
        nameStudent: new FormControl(data.nameStudent, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/)]),
        phoneStudent: new FormControl(data.phoneStudent, [Validators.required, Validators.pattern(/^0+[0-9]{9}$/)]),
        emailStudent: new FormControl(data.emailStudent, [Validators.required, Validators.email]),
        birthDayStudent: new FormControl(data.birthDayStudent, [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
        idNation: new FormControl(data.idNation, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
        idCity: new FormControl(data.idCity, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
        idDistrict: new FormControl(data.idDistrict, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
        idWard: new FormControl(data.idWard, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
      });
      console.log(this.editFormStudent)
    });
  }

  onEditStudent(){
    if (this.editFormStudent.invalid) {return}
    this.stdSrv.updateStudent(this.idStudent, this.editFormStudent.value).subscribe(data =>{
      console.log(data);
      if(confirm("You have successfully corrected!")){
        this.router.navigate(['/home/list-student']);
      }
    })
  }
}
