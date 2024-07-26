import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  //GetAll Nation
  getListNation(): Observable<any>{
    return this.http.get<any>('https://localhost:7021/api/Nations')
  }
  //Add Nation
  createNation(data: any): Observable<any>{
    return this.http.post<any>('https://localhost:7021/api/Nations', data)
  }
  // GetOne Nation
  getOneNation(idNation: number): Observable<any>{
    return this.http.get<any>('https://localhost:7021/api/Nations/' + idNation)
  }
  //Edit Nation
  updateNation(idNation: number, data: any): Observable<any>{
    return this.http.put<any>('https://localhost:7021/api/Nations/' + idNation, data)
  }
  //Delete Nation
  deleteNation(idNation: number): Observable<any>{
    return this.http.delete<any>('https://localhost:7021/api/Nations/' + idNation)
  }
  // Search Nation
  SearchNation(search: string): Observable<any[]>{
    return this.http.get<any[]>('https://localhost:7021/api/Nations/search' + "?search=" + search)
  }
  // SortBy Nation
  AscNation(sort: string): Observable<any[]>{
    return this.http.get<any[]>('https://localhost:7021/api/Nations/search' + "?sortBy=" + sort)
  }
  // Page Nation
  PageNation(pageNation: number): Observable<any[]>{
    return this.http.get<any[]>('https://localhost:7021/api/Nations/search' + "?page=" + pageNation)
  }
  //GetAll City
  getListCity(): Observable<any>{
      return this.http.get<any>('https://localhost:7021/api/Citys')
  }
  //Add City
  createCity(data: any): Observable<any>{
      return this.http.post<any>('https://localhost:7021/api/Citys', data)
  }
  // GetOne City
  getOneCity(idCity: number): Observable<any>{
      return this.http.get<any>('https://localhost:7021/api/Citys/' + idCity)
  }
  //Edit City
  updateCity(idCity: number, data: any): Observable<any>{
      return this.http.put<any>('https://localhost:7021/api/Citys/' + idCity, data)
  }
  //Delete City
  deleteCity(idCity: number): Observable<any>{
      return this.http.delete<any>('https://localhost:7021/api/Citys/' + idCity)
  }
  // Search City
    SearchCity(search: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Citys/search' + "?search=" + search)
  }
  // SortBy City
  AscCity(sort: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Citys/search' + "?sortBy=" + sort)
  }
  // Page City
  PageCity(pageCity: number): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Citys/search' + "?page=" + pageCity)
  }
  //GetAll District
  getListDistrict(): Observable<any>{
    return this.http.get<any>('https://localhost:7021/api/Districts')
  }
  //Add District
  createDistrict(data: any): Observable<any>{
      return this.http.post<any>('https://localhost:7021/api/Districts', data)
  }
  // GetOne District
  getOneDistrict(idDistrict: number): Observable<any>{
      return this.http.get<any>('https://localhost:7021/api/Districts/' + idDistrict)
  }
  //Edit District
  updateDistrict(idDistrict: number, data: any): Observable<any>{
      return this.http.put<any>('https://localhost:7021/api/Districts/' + idDistrict, data)
  }
  //Delete District
  deleteDistrict(idDistrict: number): Observable<any>{
      return this.http.delete<any>('https://localhost:7021/api/Districts/' + idDistrict)
  }
  // Search District
    SearchDistrict(search: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Districts/search' + "?search=" + search)
  }
  // SortBy District
  AscDistrict(sort: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Districts/search' + "?sortBy=" + sort)
  }
  // Page District
  PageDistrict(pageDistrict: number): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Districts/search' + "?page=" + pageDistrict)
  }
  //GetAll Ward
  getListWard(): Observable<any>{
    return this.http.get<any>('https://localhost:7021/api/Wards')
  }
  //Add Ward
  createWard(data: any): Observable<any>{
      return this.http.post<any>('https://localhost:7021/api/Wards', data)
  }
  // GetOne Ward
  getOneWard(idWard: number): Observable<any>{
      return this.http.get<any>('https://localhost:7021/api/Wards/' + idWard)
  }
  //Edit Ward
  updateWard(idWard: number, data: any): Observable<any>{
      return this.http.put<any>('https://localhost:7021/api/Wards/' + idWard, data)
  }
  //Delete Ward
  deleteWard(idWard: number): Observable<any>{
      return this.http.delete<any>('https://localhost:7021/api/Wards/' + idWard)
  }
  // Search Ward
    SearchWard(search: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Wards/search' + "?search=" + search)
  }
  // SortBy Ward
  AscWard(sort: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Wards/search' + "?sortBy=" + sort)
  }
  // Page Ward
  PageWard(pageWard: number): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Wards/search' + "?page=" + pageWard)
  }
  //GetAll Student
  getListStudent(): Observable<any>{
    return this.http.get<any>('https://localhost:7021/api/Students')
  }
  //Add Student
  createStudent(data: any): Observable<any>{
      return this.http.post<any>('https://localhost:7021/api/Students', data)
  }
  // GetOne Student
  getOneStudent(idStudent: number): Observable<any>{
      return this.http.get<any>('https://localhost:7021/api/Students/' + idStudent)
  }
  //Edit Student
  updateStudent(idStudent: number, data: any): Observable<any>{
      return this.http.put<any>('https://localhost:7021/api/Students/' + idStudent, data)
  }
  //Delete Student
  deleteStudent(idStudent: number): Observable<any>{
      return this.http.delete<any>('https://localhost:7021/api/Students/' + idStudent)
  }
  // Search Student
    SearchStudent(search: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Students/search' + "?search=" + search)
  }
  // SortBy Student
  AscStudent(sort: string): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Students/search' + "?sortBy=" + sort)
  }
  // Page Student
  PageStudent(pageStudent: number): Observable<any[]>{
      return this.http.get<any[]>('https://localhost:7021/api/Students/search' + "?page=" + pageStudent)
  }
}
