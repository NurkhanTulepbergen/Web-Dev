from django.shortcuts import render, get_object_or_404
from rest_framework import status

from .serializer import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
# Create your views here.

@api_view(['GET', 'POST'])
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def companies_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def vacancies_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def vacancies_in_company(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def products_in_category(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_ten_vacancies)
    return Response(serializer.data)