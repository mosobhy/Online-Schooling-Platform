from django.urls import  path
from . import views

app_name = 'users'
# the url patters
urlpatterns = [
    path('login/', views.login_user),
    path('doctor/', views.register_as_instructor),
    path('student/', views.register_as_student),
]