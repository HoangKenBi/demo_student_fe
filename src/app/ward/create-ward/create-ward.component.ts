import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ward',
  templateUrl: './create-ward.component.html',
  styleUrls: ['./create-ward.component.css']
})
export class CreateWardComponent implements OnInit{
  constructor(private stdSrv: StudentService, private router: Router){}

  addFormWard : FormGroup = new FormGroup({
    nameWard : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/)]),
    titleWard : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưậịấ\s]+$/)]),
    idDistrict : new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)])
  });
  ngOnInit(): void {
  }
  onCreateWard(){
    if (this.addFormWard.invalid) {return}
    this.stdSrv.createWard(this.addFormWard.value).subscribe(data => {
      console.log(data);
      if(confirm("You have added success!")){
        this.router.navigate(['/home/list-ward']);
      }
    })
  }
}
