from django.contrib.auth.models import User
import re 
from .models import *
"""
Inside this file, we have to create the helper static functions
LIKE
sum(x, y) ==> return x+y
"""

def user_serializer(user):
    """ This function accept a user object and return it as a python dictionary """

    # the user_info accessed by user is just the related name that i have set for the one to one relation and it returns just one object so i doesn't suppor all() or get()
    user_info = user.user_info

    return {
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'is_staff': user.is_staff,
        'ssn': user_info.ssn,
        'university_id': user_info.university_id,
        'level': user_info.level
    }


def username_exists(username):
    """ This function accept a user_name and return true if exist in database """
    if User.objects.filter(username=username).exists():
        return True
    return False

def value_is_exists(attribute,value,table):
    """ This function accept a attribute and value and table return true if value exist in database """
    if table.objects.filter(**{attribute:value}).exists():
        return True
    return False


def validate_email(email):

    """ This function accept a email and return true if is valid email """

    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    if(re.search(regex,email)):  
        return True 
    else:  
        return False  

def courseQuerySetSerializer(course_set):
    ''' This function accepts a course set and convert it to list object '''
    if not course_set:
        return None
    courses = {}

    for course in course_set:
        courses.update({
            'course_name': course.course_name,
            'course_code': course.course_code,
            'level': course.level
        })

    return courses

def singleCourseSerializer(course):
    ''' Convert a course object to a dictionary object '''

    return {
        'course_code': course.course_code,
        'course_name': course.course_name,
        'level': course.level,
        'enrolled_students': [ user_serializer(stu) for stu in course.students.all() ]
    }