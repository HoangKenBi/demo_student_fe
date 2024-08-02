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
  citys: { idCity: number, nameCity: string, titleCity: string }[] = [];
  titleDistricts = ['Quận', 'Huyện', 'Thị Xã', 'Thị Trấn', 'District','Town'];

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
        nameDistrict: new FormControl(data.nameDistrict, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáãâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừỉơ\s]+$/)]),
        titleDistrict: new FormControl(data.titleDistrict, [Validators.required]),
        idCity: new FormControl(data.idCity, [Validators.required]),
      });
      this.stdSrv.getListCity().subscribe((data: { idCity: number, nameCity: string, titleCity: string }[]) => {
        this.citys = data;
      });
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
