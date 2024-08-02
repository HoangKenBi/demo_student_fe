import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ward',
  templateUrl: './create-ward.component.html',
  styleUrls: ['./create-ward.component.css']
})
export class CreateWardComponent implements OnInit{
  addFormWard! : FormGroup;
  districts: { idDistrict: number, nameDistrict: string, titleDistrict: string }[] = [];
  titleWards = ['Phường', 'Xã', 'Ward'];
  constructor(private stdSrv: StudentService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.addFormWard = this.fb.group({
      nameWard: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừếắứ\s]+$/)]],
      titleWard: ['', [Validators.required]],
      idDistrict: ['', Validators.required]
    });

    this.stdSrv.getListDistrict().subscribe((data: { idDistrict: number, nameDistrict: string, titleDistrict: string }[]) => {
      this.districts = data;
    });
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
