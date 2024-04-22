import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<any>{
    return this.http.get(this.url+'/api/companies/',
      {headers: this.httpHeaders});
  }


  getCompanyDetail(id: number): Observable<any>{
    return this.http.get(this.url+'/api/companies/'+id, {headers: this.httpHeaders});
  }

  getVacancies(): Observable<any>{
    return this.http.get(`${this.url}/api/vacancies/`,{headers: this.httpHeaders});
  }

  getVacancyDetail(id: number): Observable<any>{
    return this.http.get(`${this.url}/api/vacancies/${id}`,{headers: this.httpHeaders});
  }

  getCompanyVacancy(id: number): Observable<any>{
    return this.http.get(`${this.url}/api/companies/${id}/vacancies`,{headers: this.httpHeaders});
  }


}
