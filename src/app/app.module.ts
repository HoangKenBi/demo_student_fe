import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListNationComponent,
    CreateNationComponent,
    EditNationComponent,
    ListCityComponent,
    CreateCityComponent,
    EditCityComponent,
    ListDistrictComponent,
    CreateDistrictComponent,
    EditDistrictComponent,
    ListWardComponent,
    CreateWardComponent,
    EditWardComponent,
    ListStudentComponent,
    CreateStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
