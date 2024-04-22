import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompaniesComponent} from "./companies/companies.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies', component: VacanciesComponent  },
  { path: 'vacancies/:id', component: VacancyDetailComponent  },
  { path: 'companies/:id/vacancies', component: CompanyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
