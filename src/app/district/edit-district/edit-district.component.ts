import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.css']
})
export class EditDistrictComponent implements OnInit{
  idDistrict : number = 0;
  nameDistrict: string = '';
  titleDistrict: string = '';
  idCity: string = '';

  constructor(private stdSrv: StudentService, private _route: ActivatedRoute, private router: Router){}
  districtFormEdit : FormGroup = new FormGroup({
    nameDistrict: new FormControl(),
    titleDistrict: new FormControl(),
    idCity: new FormControl(),
  });

  ngOnInit(): void {
    this.idDistrict = this._route.snapshot.params['idDistrict'];
    this.stdSrv.getOneDistrict(this.idDistrict).subscribe(data =>{
      this.districtFormEdit = new FormGroup({
        nameDistrict: new FormControl(data.nameDistrict, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáãâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừ\s]+$/)]),
        titleDistrict: new FormControl(data.titleDistrict, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưậị\s]+$/)]),
        idCity: new FormControl(data.idCity, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
      });
      console.log(this.districtFormEdit)
    });
  }
  onUpdateDistrict(){
    if (this.districtFormEdit.invalid) {return}
    this.stdSrv.updateDistrict(this.idDistrict, this.districtFormEdit.value).subscribe(data =>{
      console.log(data);
      if(confirm("You have successfully corrected!")){
        this.router.navigate(['/home/list-district']);
      }
    })
  }

}
