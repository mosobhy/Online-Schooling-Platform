from django.urls import  path
from . import views


# the url patters
urlpatterns = [
    path('delete-course/<str:username>/<str:course_code>/', views.delete_course),
    path('view-a-course/<str:username>/<str:course_code>/', views.view_specific_course),
    path('view-courses/<str:username>/', views.view_student_courses),
    path('create-course/<str:username>/', views.create_course),  # username stands for the instructor who is trying to create this course
    path('join-course/<str:username>/<str:course_code>/', views.join_course),
    path('view-material/<str:username>/<str:course_code>/', views.view_material),
    path('login/', views.login_user),
    path('doctor/', views.register_as_instructor),
    path('student/', views.register_as_student),
]
