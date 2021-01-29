from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
import jsonfield


# create the user class which is going to be populated for all users
# instructors or studetns
class UserInfo(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL , on_delete=models.CASCADE, related_name='user_info')
    ssn = models.CharField(null=True,max_length=14)
    university_id = models.CharField(null=True,max_length=20)
    level = models.IntegerField(null=True)

    # track the number of students created 
    @staticmethod
    def _studentsCount():
        return len(User.objects.filter(is_staff=False))

    # track the number of instructors created
    @staticmethod
    def _instructorsCount():
        return len(User.objects.filter(is_staff=True))

    def __str__(self):
        return f"{self.user.username}, {self.ssn}, {self.level}"


class Course(models.Model):

    course_code = models.CharField(null=True, max_length=50, unique=True)
    course_name = models.CharField(null=True, max_length=50)
    level = models.IntegerField(null=True)
    created_by_instructor = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE, null=True)
    students = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='enrolled_courses')    # to retieve the courses that some strudent has been mentioned in its students field

    @staticmethod
    def _getCourseCount(username):
        ''' 
        This function should return the number of newly created courses for a spcific
        level, in order to notify the user that a course related to his level has been
        published
        '''
        user = User.objects.get(username=username)
        return len(Course.objects.filter(level=user.level))
    
    def __str__(self):
        return self.course_name


class Matrial(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE)   # instructor
    course = models.ForeignKey(Course , default=None, on_delete=models.CASCADE, related_name='uploaded_materials')
    path = models.TextField(null=True)
    
    @staticmethod
    def _getMaterialCount(course_code):
        ''' 
        this function is going to return the number of matrials uploaded to a specific course
        so i needed to be triggered every 8 hours
        '''
        # query for the course
        course = Course.objects.get(course_code=course_code)
        
        # pass this course to retrieve its related matrials
        return len(Matrial.objects.filter(course=course))

    def __str__(self):
        return str(self.user)


class Quiz(models.Model):

    course = models.ForeignKey(Course , default=None, on_delete=models.CASCADE, related_name='quizes')
    name = models.CharField(null=True, max_length=50)
    satrt_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    question = jsonfield.JSONField(default=None, null=True)    # this is going to store a json object

    @staticmethod
    def _getQuizCount(course_code):
        ''' 
        this function is going to return the number of matrials uploaded to a specific course
        but remember that no need to call this function every 8 hours, cuz when an instructor 
        creates a course, it should be renderd immdiately in the student's feed
        '''
        course = Course.objects.get(course_code=course_code)
        return len(Quiz.objects.filter(course=course))

    def __str__(self):
        return self.name


class Result(models.Model):
    quiz = models.ForeignKey(Quiz, default=None, on_delete=models.CASCADE, related_name='taken_by') # this will dispaly the results of quiz.. quiz.taken_by.all()
    student = models.ForeignKey(settings.AUTH_USER_MODEL, default=None, on_delete=models.CASCADE, related_name='quizs_reuslts')
    # querying for the quize details of some quiz result
    # result = Result.quiz_details.get(pk=Quiz.objects.get(pk=id))
    # results = quiz_obj.quiz_details.all()
    grade = models.IntegerField(null=True)

    def __str__(self):
        return str(self.user)
