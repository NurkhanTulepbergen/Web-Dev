import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  company = {id:'test', name:'test', description: 'test', city: 'test', address: 'test'};
  vacancies = [{id:'test', name:'test', description: 'test', salary: 'test', company: 'test'}];
  companyId!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.companyId = Number(params.get('id'));
      console.log(this.companyId);
      this.getCompanyDetail(this.companyId);
      this.getCompanyVacancies(this.companyId)
    });
  }


  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  getCompanyDetail = (companyId: number) =>{
    this.api.getCompanyDetail(companyId).subscribe(company=>{this.company = company;}, error => console.log(error));
  }

  getCompanyVacancies = (companyId: number) =>{
    this.api.getCompanyVacancy(companyId).subscribe(vacancies=>{this.vacancies = vacancies;}, error => console.log(error));
  }



}
