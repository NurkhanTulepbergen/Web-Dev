import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";
import {CompanyDetialComponent} from "./company-detial/company-detial.component";
import {VacancyDetialComponent {


}



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetialComponent },
  { path: 'vacancies', component: VacanciesComponent  },
  { path: 'vacancies/:id', component: VacancyDetailComponent  },
  { path: 'companies/:id/vacancies', component: CompanyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
