import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router, Routes } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  nations: { idNation: number; nameNation: string; titleNation: string }[] = [];
  citys: { idCity: number; nameCity: string; titleCity: string }[] = [];
  districts: {
    idDistrict: number;
    nameDistrict: string;
    titleDistrict: string;
  }[] = [];
  wards: { idWard: number; nameWard: string; titleWard: string }[] = [];
  selectedCity: any;

  constructor(
    private stdSrv: StudentService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  addFormStudent!: FormGroup;

  ngOnInit(): void {
    this.addFormStudent = this.fb.group({
      nameStudent: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/
          ),
        ],
      ],
      phoneStudent: [
        '',
        [Validators.required, Validators.pattern(/^0+[0-9]{9}$/)],
      ],
      emailStudent: ['', [Validators.required, Validators.email]],
      birthDayStudent: ['', [Validators.required]],
      idNation: ['', [Validators.required]],
      idCity: ['', [Validators.required]],
      idDistrict: ['', [Validators.required]],
      idWard: ['', [Validators.required]],
    });

    this.stdSrv
      .getListNation()
      .subscribe(
        (
          data: { idNation: number; nameNation: string; titleNation: string }[]
        ) => {
          this.nations = data;
        }
      );

    // Theo dõi thay đổi của idNation
    this.addFormStudent.get('idNation')?.valueChanges.subscribe((idNation) => {
      this.loaiCitysByNation(idNation);
    });

    // Theo dõi thay đổi của idCity
    this.addFormStudent.get('idCity')?.valueChanges.subscribe((idCity) => {
      this.loaiDistrictsAndWardsByCity(idCity);
    });
  }

  onChangeCity(e: any) {
    console.log(e, '123');
  }

  loaiCitysByNation(idNation: number): void {
    this.stdSrv
      .getCitysByNation(idNation)
      .subscribe(
        (data: { idCity: number; nameCity: string; titleCity: string }[]) => {
          this.citys = data;
          this.addFormStudent.get('idCity')?.setValue(''); // Reset giá trị idCity khi quốc gia thay đổi
          this.districts = []; // Reset danh sách quận
          this.wards = []; // Reset danh sách phường
        }
      );
  }

  loaiDistrictsAndWardsByCity(idCity: number): void {
    // Gọi API để lấy danh sách quận và phường theo thành phố
    this.stdSrv.getListDistrictByCity(idCity).subscribe(
      (
        data: {
          idDistrict: number;
          nameDistrict: string;
          titleDistrict: string;
        }[]
      ) => {
        this.districts = data;
        this.addFormStudent.get('idDistrict')?.setValue(''); // Reset giá trị idDistrict khi thành phố thay đổi
        this.wards = []; // Reset danh sách phường
      }
    );

    this.stdSrv
      .getListWardByCity(idCity)
      .subscribe(
        (data: { idWard: number; nameWard: string; titleWard: string }[]) => {
          this.wards = data;
        }
      );

    // this.stdSrv.getListCity().subscribe((data : {idCity: number, nameCity: string, titleCity: string} [])=>{
    // this.citys = data;
    //   })
    //   this.stdSrv.getListDistrict().subscribe((data: { idDistrict: number, nameDistrict: string, titleDistrict: string }[]) => {
    //     this.districts = data;
    //   });
    //   this.stdSrv.getListWard().subscribe((data: { idWard: number, nameWard: string, titleWard: string }[] ) =>{
    //     this.wards = data;
    //   });
  }
  onCreateStudent() {
    if (this.addFormStudent.invalid) {
      return;
    }
    this.stdSrv.createStudent(this.addFormStudent.value).subscribe((data) => {
      console.log(data);
      if (confirm('You have added success!')) {
        this.router.navigate(['/home/list-student']);
      }
    });
  }
}

// constructor (private stdSrv: StudentService, private router: Router){}

// addFormStudent : FormGroup = new FormGroup({
//   nameStudent: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒốÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲÝỴỶỸỳýỵỷỹƯăâêôơưừịấ\s]+$/)]),
//   phoneStudent: new FormControl('', [Validators.required, Validators.pattern(/^0+[0-9]{9}$/)]),
//   emailStudent: new FormControl('', [Validators.required, Validators.email]),
//   birthDayStudent: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
//   idNation: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
//   idCity: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
//   idDistrict: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
//   idWard: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[1-9]+$/)]),
// });

// ngOnInit(): void {
// }
// onCreateStudent(){
//   if (this.addFormStudent.invalid) {return}
//   this.stdSrv.createStudent(this.addFormStudent.value).subscribe(data =>{
//     console.log(data);
//     if(confirm("You have added success!")){
//       this.router.navigate(['/home/list-student']);
//     }
//   })
// }
