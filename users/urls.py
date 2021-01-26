from django.urls import  path
from . import views


# the url patters
urlpatterns = [
    path('login/', views.login_user),
]
