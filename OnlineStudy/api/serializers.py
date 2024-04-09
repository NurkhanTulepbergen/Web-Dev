from rest_framework import serializers
from .models import Subject, Topic, Task, UserProfile

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'