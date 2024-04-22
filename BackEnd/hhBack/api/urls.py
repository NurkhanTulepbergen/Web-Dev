from django.urls import path
from .views import *
urlpatterns = [
    path('companies/', CompanyViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('companies/<int:pk>', CompanyViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('companies/<int:pk>/vacancies', CompanyViewSet.as_view({'get':'vacancies'})),
    path('vacancies/', VacancyViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('vacancies/<int:pk>', VacancyViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('vacancies/top_ten', VacancyViewSet.as_view({'get': 'top_ten'})),
]
