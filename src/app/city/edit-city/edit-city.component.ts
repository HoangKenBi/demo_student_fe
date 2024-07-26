import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit{
  idCity : number = 0;
  nameCity: string = '';
  titleCity: string = '';
  idNation: string = '';

  constructor(private stdSrv: StudentService, private _route: ActivatedRoute, private router: Router){}
  editFormCity : FormGroup = new FormGroup({
    nameCity : new FormControl(),
    titleCity : new FormControl(),
    idNation : new FormControl()
  });

  ngOnInit(): void {
    this.idCity = this._route.snapshot.params["idCity"];
    this.stdSrv.getOneCity(this.idCity).subscribe(data => {
      this.editFormCity = new FormGroup({
        nameCity : new FormControl(data.nameCity, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
        titleCity : new FormControl(data.titleCity, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
        idNation: new FormControl(data.idNation, [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)])
      });
      console.log(this.editFormCity)
    });
  }
  onUpdateCity(){
    if (this.editFormCity.invalid) {return}
    this.stdSrv.updateCity(this.idCity, this.editFormCity.value).subscribe(data => {
      console.log(data);
      if(confirm("You have successfully corrected!")){
        this.router.navigate(['/home/list-city']);
      }
    })
  }

}
