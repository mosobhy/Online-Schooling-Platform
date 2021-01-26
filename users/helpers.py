from django.contrib.auth.models import User
import re 

"""
Inside this file, we have to create the helper static functions
LIKE
sum(x, y) ==> return x+y
"""

def user_serializer(user):
    """ This function accept a user object and return it as a python dictionary """
    return user.__dict__


def username_exists(username):
    """ This function accept a user_name and return true if exist in database """
    if User.objects.filter(username=username).exists():
        return True
    return False

def validate_email(email):

    """ This function accept a email and return true if is valid email """

    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    if(re.search(regex,email)):  
        return True 
    else:  
        return False  