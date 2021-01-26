from django.urls import  path
from . import views


# the url patters
urlpatters = [
    path('login/', views.login_user),
]