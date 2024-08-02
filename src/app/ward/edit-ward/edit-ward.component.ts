import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-ward',
  templateUrl: './edit-ward.component.html',
  styleUrls: ['./edit-ward.component.css']
})
export class EditWardComponent implements OnInit{
  idWard : number = 0;
  nameWard: string = '';
  titleWard: string = '';
  idDistrict: string = '';
  districts: { idDistrict: number, nameDistrict: string, titleDistrict: string }[] = [];
  titleWards = ['Phường', 'Xã', 'Ward'];

  constructor(private stdSrv: StudentService, private _route: ActivatedRoute, private router: Router){}
  wardFormEdit : FormGroup = new FormGroup({
    nameWard: new FormControl(),
    titleWard: new FormControl(),
    idDistrict: new FormControl(),
  });
  ngOnInit(): void {
    this.idWard = this._route.snapshot.params['idWard'];
    this.stdSrv.getOneWard(this.idWard).subscribe(data =>{
      this.wardFormEdit = new FormGroup({
        nameWard: new FormControl(data.nameWard, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/)]),
        titleWard: new FormControl(data.titleWard, [Validators.required]),
        idDistrict: new FormControl(data.idDistrict, [Validators.required]),
      });
      this.stdSrv.getListDistrict().subscribe((data: { idDistrict: number, nameDistrict: string, titleDistrict: string }[]) => {
        this.districts = data;
      });
    });
  }
  onUpdateWard(){
    if (this.wardFormEdit.invalid) {return}
    this.stdSrv.updateWard(this.idWard, this.wardFormEdit.value).subscribe(data =>{
      console.log(data);
      if(confirm("You have successfully corrected!")){
        this.router.navigate(['/home/list-ward']);
      }
    })
  }
}
