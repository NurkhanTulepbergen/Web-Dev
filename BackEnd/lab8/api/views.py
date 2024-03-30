from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Product
from .serializers import ProductSerializer, CategorySerializer
# Create your views here.

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['GET'])
def category_list(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)

@api_view(['GET'])
def products_in_category(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

