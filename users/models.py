from django.db import models
from django.contrib.auth.models import User
import jsonfield    # jsonfield.JSONField()


class UserInfo(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    ssn = models.CharField(null=True,max_length=14)
    university_id = models.CharField(null=True,max_length=20)
    level = models.IntegerField(null=True)

    def __str__(self):
        return str(self.user.username)


class Course(models.Model):
    # the observer
    course_count = 0

    course_code = models.CharField(null=True,max_length=50)
    course_name = models.CharField(null=True,max_length=50)
    level = models.IntegerField(null=True)
    user_id = models.ForeignKey(User , on_delete=models.CASCADE,null=True)
    students = models.ManyToManyField(User, blank=True ,related_name='enrolled_students',null=True)
    
    # when querying the course for the registered students
    # course_obje = Course.enrolled_students.exculde(is_staff=True)
    # add student to the course
    # course_obj = Course.enrolled_students.add(user_obj)

    @classmethod
    def _getCourseCount(cls):
        ''' 
        we need to use this function when the front-end checks for any changes or
        in the database in order to notify the user
        '''
        cls.course_count += 1
        return cls.course_count
    
    def __str__(self):
        return self.course_name


class Matrial(models.Model):
    # the observer
    material_count = 0

    user = models.ForeignKey(User , on_delete=models.CASCADE)
    course = models.ForeignKey(Course , default=None ,on_delete=models.CASCADE, related_name='uploaded_materials')
    path = models.TextField(null=True)
    
    @classmethod
    def _getMaterialCount(cls):
        ''' 
        we need to use this function when the front-end checks for any changes or
        in the database in order to notify the user
        '''
        cls.material_count += 1
        return cls.material_count

    def __str__(self):
        return str(self.user)


class Quiz(models.Model):
    # the observer
    quiz_count = 0

    course = models.ForeignKey(Course , default=None, on_delete=models.CASCADE, related_name='quizes')
    name = models.CharField(null=True, max_length=50)
    satrt_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    question = jsonfield.JSONField(default=None, null=True)    # this is going to store a json object

    @classmethod
    def _getQuizCount(cls):
        ''' 
        we need to use this function when the front-end checks for any changes or
        in the database in order to notify the user
        '''
        cls.quiz_count += 1
        return cls.quiz_count

    def __str__(self):
        return self.name

class Result(models.Model):
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE, related_name='students')
    # querying for the quize details of some quiz result
    # result = Result.quiz_details.get(pk=Quiz.objects.get(pk=id))
    # results = quiz_obj.quiz_details.all()
    quiz = models.ForeignKey(Quiz, default=None, on_delete=models.CASCADE, related_name='quiz_details')
    grade = models.IntegerField(null=True)

    def __str__(self):
        return str(self.user)
