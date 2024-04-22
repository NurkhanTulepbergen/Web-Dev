import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent {
  vacancy = {id:'test', name:'test', description: 'test', salary: 'test', company: 'test'};
  vacancyId!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vacancyId = Number(params.get('id'));
      this.getVacancy(this.vacancyId);
    })

  }

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.getVacancy(this.vacancyId);
  }
  getVacancy = (vacancyId: number)=>{
    this.api.getVacancyDetail(vacancyId).subscribe(vacancy =>{this.vacancy = vacancy;}, error => console.log(error));
  }
}
