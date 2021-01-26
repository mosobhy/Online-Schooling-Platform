"""
Inside this file, we have to create the helper static functions
LIKE
sum(x, y) ==> return x+y
"""

def user_serializer(user):
    """ This function accept a user object and return it as a python dictionary """
    return user.__dict__