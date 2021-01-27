from django.urls import  path
from . import views


# the url patters
urlpatterns = [
    path('view-courses/<str:username>', views.view_student_courses),
    path('login/', views.login_user),
    path('doctor/', views.register_as_instructor),
    path('student/', views.register_as_student),
]
