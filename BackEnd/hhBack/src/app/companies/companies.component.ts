import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companies = [{id:'test', name:'test', description: 'test', city: 'test', address: 'test'}];

  constructor(private api: ApiService) {
    this.getChats();
  }

  getChats = ()=>{
    this.api.getAllCompanies().subscribe(
      data => {
        this.companies = data;
      }, error => console.log(error)
    )
  }
  protected readonly Component = Component;
}
