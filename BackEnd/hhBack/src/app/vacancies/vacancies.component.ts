import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent {
  vacancies = [{id:'test', name:'test', description: 'test', salary: 'test', company: 'test'}];
  constructor(private api: ApiService) {
    this.getVacancies()
  }

  getVacancies = () =>{
    this.api.getVacancies().subscribe(
      vacancies =>{
        this.vacancies = vacancies;
      }, error => console.log(error)
    )
  }
}
