import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-edit-nation',
  templateUrl: './edit-nation.component.html',
  styleUrls: ['./edit-nation.component.css']
})
export class EditNationComponent implements OnInit{
  idNation : number = 0;
  nameNation : string = '';
  titleNation : string = '';
  titles = ['Châu Á', 'Châu Phi', 'Châu Âu', 'Châu Mỹ', 'Châu Đại Dương', 'Châu Nam Cực'];

  constructor(private stdSrv: StudentService, private _route: ActivatedRoute, private router: Router){}
  
  editFormNation : FormGroup = new FormGroup({
    nameNation : new FormControl(),
    titleNation : new FormControl()
  });

  ngOnInit(): void {
    this.idNation = this._route.snapshot.params['idNation'];
    this.stdSrv.getOneNation(this.idNation).subscribe(data => {
      this.editFormNation = new FormGroup({
        nameNation: new FormControl(data.nameNation, [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơư\s]+$/)]),
        titleNation: new FormControl(data.titleNation, [Validators.required])
      });
    })
  }
  onUpdateNation(){
    if (this.editFormNation.invalid) {return}
    this.stdSrv.updateNation(this.idNation, this.editFormNation.value).subscribe(data => {
      console.log(data);
      if(confirm("You have successfully corrected!")){
        this.router.navigate(['home/list-nation']);
      }
    })
  }
}
