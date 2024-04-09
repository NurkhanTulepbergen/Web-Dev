from django.contrib import admin
from .models import Subject, Topic, Task, UserProfile
# Register your models here.

admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Task)
admin.site.register(UserProfile)