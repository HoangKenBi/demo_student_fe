import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit{
  createFormCity!: FormGroup;
  nations: { idNation: number, nameNation: string, titleNation: string }[] = [];
  titleCitys = ['Thành Phố', 'Tỉnh', 'City', 'Conscious'];
  constructor(private stdSrv: StudentService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.createFormCity = this.fb.group({
      nameCity: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]],
      titleCity: ['', [Validators.required]],
      idNation: ['', Validators.required]
    });

    this.stdSrv.getListNation().subscribe((data: { idNation: number, nameNation: string, titleNation: string }[]) => {
      this.nations = data;
    });
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
