from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Subject, Topic, Task

def subject_list(request):
    subjects = Subject.objects.all()
    return render(request, 'subject_list.html', {'subjects': subjects})

def subject_detail(request, subject_id):
    subject = Subject.objects.get(pk=subject_id)
    topics = Topic.objects.filter(subject=subject)
    return render(request, 'subject_detail.html', {'subject': subject, 'topics': topics})

def topic_detail(request, topic_id):
    topic = Topic.objects.get(pk=topic_id)
    tasks = Task.objects.filter(topic=topic)
    return render(request, 'topic_detail.html', {'topic': topic, 'tasks': tasks})
