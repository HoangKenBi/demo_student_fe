import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListNationComponent } from './nation/list-nation/list-nation.component';
import { CreateNationComponent } from './nation/create-nation/create-nation.component';
import { EditNationComponent } from './nation/edit-nation/edit-nation.component';
import { ListCityComponent } from './city/list-city/list-city.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { ListDistrictComponent } from './district/list-district/list-district.component';
import { CreateDistrictComponent } from './district/create-district/create-district.component';
import { EditDistrictComponent } from './district/edit-district/edit-district.component';
import { ListWardComponent } from './ward/list-ward/list-ward.component';
import { CreateWardComponent } from './ward/create-ward/create-ward.component';
import { EditWardComponent } from './ward/edit-ward/edit-ward.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/list-nation', component: ListNationComponent},
  {path: 'home/list-nation/create-nation', component: CreateNationComponent},
  {path: 'home/list-nation/edit-nation/:idNation', component: EditNationComponent},
  {path: 'home/list-city', component: ListCityComponent},
  {path: 'home/list-city/create-city', component: CreateCityComponent},
  {path: 'home/list-city/edit-city/:idCity', component: EditCityComponent},
  {path: 'home/list-district', component: ListDistrictComponent},
  {path: 'home/list-district/create-district', component: CreateDistrictComponent},
  {path: 'home/list-district/edit-district/:idDistrict', component: EditDistrictComponent},
  {path: 'home/list-ward', component: ListWardComponent},
  {path: 'home/list-ward/create-ward', component: CreateWardComponent},
  {path: 'home/list-ward/edit-ward/:idWard', component: EditWardComponent},
  {path: 'home/list-student', component: ListStudentComponent},
  {path: 'home/list-student/create-student', component: CreateStudentComponent},
  {path: 'home/list-student/edit-student/:idStudent', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
