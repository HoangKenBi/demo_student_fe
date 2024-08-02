import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-district',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.css']
})
export class CreateDistrictComponent implements OnInit{
  districtFormCreate! : FormGroup ;
  citys: { idCity: number, nameCity: string, titleCity: string }[] = [];
  titleDistricts = ['Quận', 'Huyện', 'Thị Xã', 'Thị Trấn', 'District','Town'];
  constructor(private stdSrv: StudentService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void { 
    this.districtFormCreate = this.fb.group({
      nameDistrict: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừế\s]+$/)]],
      titleDistrict: ['', [Validators.required]],
      idCity: ['', Validators.required]
    });

    this.stdSrv.getListCity().subscribe((data: { idCity: number, nameCity: string, titleCity: string }[]) => {
      this.citys = data;
    });
  }

  onCreateDistrict(){
    if (this.districtFormCreate.invalid) {return}
    this.stdSrv.createDistrict(this.districtFormCreate.value).subscribe(data =>{
      console.log(data);
      if(confirm("You have added success!")){
        this.router.navigate(['/home/list-district']);
      }
    })
  }
}

// constructor(private stdSrv: StudentService, private router: Router){}
// districtFormCreate : FormGroup = new FormGroup({
//   nameDistrict: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừ\s]+$/)]),
//   titleDistrict: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưậ\s]+$/)]),
//   idCity: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
// });

// ngOnInit(): void { 
// }

// onCreateDistrict(){
//   if (this.districtFormCreate.invalid) {return}
//   this.stdSrv.createDistrict(this.districtFormCreate.value).subscribe(data =>{
//     console.log(data);
//     if(confirm("You have added success!")){
//       this.router.navigate(['/home/list-district']);
//     }
//   })
// }