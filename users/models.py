from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Info(models.Model):
    user_id = models.OneToOneField(User , on_delete=models.CASCADE)
    SSN = models.CharField(null=True,max_length=20)
    university_id = models.CharField(null=True,max_length=20)
    level = models.IntegerField(null=True)

    def __str__(self):
        return str(self.user_id)

class Course(models.Model):
    course_code = models.CharField(null=True,max_length=50)
    course_name = models.CharField(null=True,max_length=50)
    level = models.IntegerField(null=True)
    user_id = models.ForeignKey(User , on_delete=models.CASCADE)

    def __str__(self):
        return self.course_name

class Course_enrolled(models.Model):
    user_id = models.ForeignKey(User , on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course , on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user_id)

class Matrial(models.Model):
    user_id = models.ForeignKey(User , on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course , on_delete=models.CASCADE)
    path = models.TextField(null=True)

    def __str__(self):
        return str(self.user_id)

class Quiz(models.Model):
    course_id = models.ForeignKey(Course , on_delete=models.CASCADE)
    name = models.CharField(null=True, max_length=50)
    satrt_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    question = models.TextField(null=True)

    def __str__(self):
        return self.name

class Result(models.Model):
    user_id = models.ForeignKey(User , on_delete=models.CASCADE)
    quiz_id = models.ForeignKey(Quiz , on_delete=models.CASCADE)
    grade = models.IntegerField(null=True)

    def __str__(self):
        return str(self.user_id)