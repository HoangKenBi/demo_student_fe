import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-nation',
  templateUrl: './create-nation.component.html',
  styleUrls: ['./create-nation.component.css']
})
export class CreateNationComponent implements OnInit{
  constructor(private stdSrv: StudentService, private router: Router){}

  createFormNation : FormGroup = new FormGroup({
    nameNation : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
    titleNation : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)])
  });
  ngOnInit(): void {
  }
  onCreateNation(){
    if (this.createFormNation.invalid) {return}
    this.stdSrv.createNation(this.createFormNation.value).subscribe(data => {
      console.log(data);
      if(confirm("You have added success!")){
        this.router.navigate(['home/list-nation']);
      }
    })
  }

}
