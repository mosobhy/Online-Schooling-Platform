from django.urls import  path
from . import views


# the url patters
urlpatterns = [
    path('view-courses/<str:username>', views.view_student_courses),
    path('create-course/<str:username>', views.create_course),  # username stands for the instructor who is trying to create this course
    path('join-course/<str:username>/<str:course_code>', views.join_course),
    path('login/', views.login_user),
    path('doctor/', views.register_as_instructor),
    path('student/', views.register_as_student),
]
