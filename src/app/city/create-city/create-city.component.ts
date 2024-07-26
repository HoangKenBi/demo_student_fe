import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit{
  constructor(private stdSrv: StudentService, private router: Router){}

  createFormCity : FormGroup = new FormGroup({
    nameCity : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
    titleCity : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
    idNation : new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)])
  });
  ngOnInit(): void {
  }
  onCreateCity(){
    if (this.createFormCity.invalid) {return}
    this.stdSrv.createCity(this.createFormCity.value).subscribe(data =>{ 
      console.log(data);
      if(confirm("You have added success!")){
        this.router.navigate(['/home/list-city']);
      }
    })
  }

}
