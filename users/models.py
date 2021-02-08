from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
import jsonfield
import json


# create the user class which is going to be populated for all users
# instructors or studetns
class UserInfo(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL , on_delete=models.CASCADE, related_name='user_info')
    ssn = models.CharField(null=True,max_length=14)
    university_id = models.CharField(null=True,max_length=20)
    level = models.IntegerField(null=True)
    is_authenticated = models.BooleanField(default=False)

    # these two functions are temporary till after final exams
    def login_user(self):
        # login in the user via updating the value of the last field
        self.is_authenticated = True
    
    def logout_user(self):
        # logout the user via shutting down the value of the is_auth...
        self.is_authenticated = False
        

    def userSerializer(self):
        ''' Return the user object as a dictionary object '''

        return {
            'username': self.user.username,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'email': self.user.email,
            'is_staff': self.user.is_staff,
            'ssn': self.ssn,
            'university_id': self.university_id,
            'level': self.level
        }

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
    created_by_instructor = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE, related_name='created_courses', null=True)
    students = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='enrolled_courses')    # to retieve the courses that some strudent has been mentioned in its students field

    def courseSerializer(self):
        ''' 
            Return the course object and all of its related stuff as a
            dictionary object 
        '''
        return {
            'course_code': self.course_code,
            'course_name': self.course_name,
            'level': self.level,
            'enrolled_students': [ stu.userSerializer() for stu in self.students.all() ]
        }

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
    description = models.TextField(null=True)
    
    def matrialSerializer(self):
        '''
            Return the matrial object and all of its related stuff 
            as a dictionray object
        '''
        return {
            'instructor': self.user.username,
            'course_code': self.course.course_code,
            'course_name': self.course.course_name,
            'description': self.description,
            'path': self.path
        }

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

    def quizSerializer(self):
        '''
            Return the quiz object and all of its related stuff as 
            a dicitonary object
        '''
        return {
            'course_code': self.course.course_code,
            'course_name': self.course.course_name,
            'quiz_name': self.name,
            'start_time': str(self.start_time),
            'end_time': str(self.end_time),
            'questions': json.loads(self.question)
        }


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
    quiz = models.ForeignKey(Quiz, default=None, on_delete=models.CASCADE, related_name='taken_by') # this will dispaly the results of quiz.. quiz.taken_by.all() all the result instances
    student = models.ForeignKey(settings.AUTH_USER_MODEL, default=None, on_delete=models.CASCADE, related_name='quizs_reuslts')
    grade = models.IntegerField(null=True)

    def resultSerializuserSerializerer(self):
        '''
            Return the result object and all of its related stuff
            as a dictionray object
        '''
        return {
            'quiz': self.quiz.coures.course_name,
            'quiz_name': self.quiz.name,
            'start_time': str(self.quiz.start_time),
            'end_time': str(self.quiz.end_time),
            'student': self.student.username,
            'ssn': self.student.ssn,
            'grade': self.grade
        }

    def __str__(self):
        return str(self.user)
