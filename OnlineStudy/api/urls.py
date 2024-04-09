from django.urls import path
from api import views

from django.urls import path
from . import views

urlpatterns = [
    path('subjects/', views.subject_list, name='subject_list'),
    path('subjects/<int:subject_id>/', views.subject_detail, name='subject_detail'),
    path('topics/<int:topic_id>/', views.topic_detail, name='topic_detail'),
]
