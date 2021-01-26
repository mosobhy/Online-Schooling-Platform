"""
Inside this file, we have to create the helper static functions
LIKE
sum(x, y) ==> return x+y
"""

def user_serializer(user):
    """ This function accept a user object and return it as a python dictionary """
    return user.__dict__


def username_exists(username):
    """ This function accept a user object and return true if exist in database """
    if User.objects.filter(username=username).exists():
        return True
    
    return False
