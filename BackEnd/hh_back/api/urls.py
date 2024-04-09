from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.companies_detail),
    path('companies/<int:id>/vacancies', views.vacancies_in_company),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:id>', views.vacancies_detail),

]