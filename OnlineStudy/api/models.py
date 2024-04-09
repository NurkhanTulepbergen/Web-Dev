from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Topic(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(default='')  # Укажите значение по умолчанию здесь

    def __str__(self):
        return self.title



class Task(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField()

    def __str__(self):
        return self.title

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    subjects = models.ManyToManyField(Subject, related_name='students')

    def __str__(self):
        return self.user.username
