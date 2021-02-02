from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie, csrf_exempt
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import json
from .models import *
from .helpers import *
import os
from django.core.files.storage import FileSystemStorage


# delete a course
@require_http_methods(['GET'])
@login_required(login_url='/api/login/')
def delete_course(request, username, course_code):
    """
    This function should delete a course from the database when an instructor
    clicks the delete button on a specific course
    """
    if request.method == 'GET':
        user = User.objects.get(username=username)
        if not user.is_staff:
            return JsonResponse({'error': 'User not allowed to delete'}, status=403)

        # qurey for this course and delete it
        course_to_delete = Course.objects.get(course_code=course_code)
        if not course_to_delete:
            return JsonResponse({'error': 'Course Not found, it sounds like an issue with frontend'}, status=404)
        
        # delete
        course_to_delete.delete()

        # THIS METHOD SHOULD NOT RETURN ANYTHING BUT FOR TESTING, RETURN SUCCESS
        return JsonResponse({'success': True}, status=200)
    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)


# view specific course details
@require_http_methods(['GET'])
def view_specific_course(request, username, course_code):
    """ 
    This view function should be executed when an instructor is trying to 
    access a specific course in order to upload its related matrials or make quizes
    so when the view course button is clicked, frontend should send a request with the course_code
    of the clicked upon course to this endpoint
    """
    if request.method == 'GET':
        user = User.objects.get(username=username)
        if not user.is_staff:
            return JsonResponse({'error': 'User not an instructor'}, status=403)

        # query the db for this course
        course = Course.objects.get(course_code=course_code)
        if course is None:
            return JsonResponse(
                {'error': 'Something went wrong, Course has not been fetched from db'},
                status=401
            )
        
        # get the whole data of this particular course
        return JsonResponse({
            **{ 'success': True },
            **singleCourseSerializer(course)
        }, status=200)

    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)


# view course's details for a student


# view courses that a student has registerd for.
@require_http_methods(['GET'])
def view_student_courses(request, username):
    """
    This function should return all the courses that a user of type student
    has registerd for,
    Recieved data: The logged-in username as a url parameter
    Return data: list of all the courses data

    THE COURSES DATA SHOULD BE CHACHED IN THE CLIENT
    """
    if request.method == 'GET':
        
        # check if the user logged in
        try:
            logged_user = request.session[username]
        except:
            return JsonResponse({'error': 'something went wrong, user supposed to be logged in'}, status=401)
 
        if logged_user != username:
            return JsonResponse({'error': 'something went wrong, user supposed to be logged in'}, status=401)
        
        # query the user's registered in courses
        user = User.objects.get(username=username)
        courses = courseQuerySetSerializer(user.enrolled_courses.all())
        if courses is None:
            return JsonResponse({'error': 'No courses to view'}, status=404)
        
        return JsonResponse({'success': True, 'courses': courses}, status=200)  # each course_code should be stored in data-course attribte inorder to grap it when perfoming actions on a speific course
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


# limiting request method to this view for just the post method
@require_http_methods(['POST'])
# @ensure_csrf_cookie
@csrf_exempt
def login_user(request):
    """
    This veiw function should check if user exiting into the database via
    authenticate() metod, if not None, login in the user
    Return: 
        json = success:True, user:user_data
    
    THE USER DATA SHOULD BE CACHED IN THE CLIENT
    """
    # access the data send from the frontend

    if request.is_ajax():
        if request.method == 'POST':

            # access the json object of user's cridentials sent from frontend
            username = request.POST['username']
            password = request.POST['password']

            # check upon the user
            user = authenticate(request, username=username, password=password)

            if user is not None:
                # log in the user
                login(request, user)

                # return the user object
                # cors = {"Access-Control-Allow-Origin": "*"}
                user = user_serializer(user)
                success = {'success': True}

                return JsonResponse({ **success, **user }, status=200)
            else:
                return JsonResponse({'error': 'Invalid credinitals'}, status=401)   # unauthorized

        else:
            return JsonResponse({'error': 'Method not Allowed'}, status=405)    # this to handle the login required part ( if the user reached via)
    else:
        JsonResponse({'error': 'Redirect To Login'}, status=303)


@require_http_methods(['POST'])
@csrf_exempt
def register_as_instructor(request):
    """
    This veiw function should take form from frontend and validate each input
    and make new instractor user with the data

    if data was valid Return: 
        json = success:True
    if data not valid Return:
        json = success:True , errors = errors

    """

    if request.method == "POST":
        # access the data send in the form
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        user_name = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        ssn = request.POST['ssn']
        

        # make array of error in eorm
        error = []
        #check if first  naem valid
        if first_name.isalpha() == False:
            error.append({"firstname" : "First name is not valid"})
        #check if first  naem valid
        if last_name.isalpha() == False:
            error.append({"lastname" : "Last name is not valid"})
        # check if user exist 
        if username_exists(user_name):
            error.append({"username" : "User name already exist"})
        # check if email is valid 
        if validate_email(email) == False:
            error.append({"email" : "It's not valid email"})
        # check if ssn is less than 20 number
        if len(ssn) > 14 or len(ssn) < 14:
            error.append({"SSN" : "SSN is must be 14"})
        # check if ssn is less than 20 number
       
        # if fount error return array of error 
        if len(error) != 0:
            return JsonResponse({'errors': error}, status=400)

        # if not found error save data in database and rtuev success message

        # add data to User object 
        user = User.objects.create_user(user_name, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.is_staff = True

        # add information to the user 
        info = UserInfo(user = user, ssn = ssn)
        # commit change 
        user.save()
        info.save()

        # now login the user
        login(request, user)

        user = user_serializer(user)
        success = {'success': True}

        # return success message 
        return JsonResponse({ **success, **user }, status=200)

    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)



@require_http_methods(['POST'])
@csrf_exempt
def register_as_student(request):
    """
    This veiw function should take form from frontend and validate each input
    and make new student user with the data

    if data was valid Return: 
        json = success:True
    if data not valid Return:
        json = success:True , errors = errors

    """

    if request.method == "POST":
        # access the data send in the form
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        user_name = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        ssn = request.POST['ssn']
        university_id = request.POST['universityid']
        level = request.POST['level']

        # make array of error in eorm
        error = []
        #check if first  naem valid
        if first_name.isalpha() == False:
            error.append({"firstname" : "First name is not valid"})
        #check if first  naem valid
        if last_name.isalpha() == False:
            error.append({"lastname" : "Last name is not valid"})
        # check if user exist 
        if username_exists(user_name):
            error.append({"username" : "User name already exist"})
        # check if email is valid 
        if validate_email(email) == False:
            error.append({"email" : "It's not valid email"})
        # check if ssn is less than 20 number
        if len(ssn) != 14:
            error.append({"SSN" : "SSN must be 14"})
        # check if ssn is less than 20 number
        if len(university_id) > 10 and len(university_id) < 5:
            error.append({"universityid" : "University id is greater than 10"})
        #check level is correct pr not
        try:
            int(level)
            if int(level) > 7:
                error.append({"levellen" : "level must be less than 7"})
        except:
            error.append({"levelint" : "level must be integer"})

        # if found error in errors array return array of error 
        if len(error) != 0:
            return JsonResponse({'errors': error}, status=400)

        # add data to User object 
        user = User.objects.create_user(user_name, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.is_staff = False

        # add information to the user 
        info = UserInfo(user = user, ssn = ssn, university_id = university_id, level = level)
        # commit change 
        user.save()
        info.save()

        # now login the user
        login(request, user)

        user = user_serializer(user)
        success = {'success': True}

        # return success message 
        return JsonResponse({ **user, **success }, status=200)

    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@require_http_methods(['POST'])
@csrf_exempt
def create_course(request, username):
    """
    This veiw function should take form from frontend and validate each input
    and make new course

    if data was valid Return: 
        json = success:True 
        and save data in database
    if data not valid Return:
        json = success:false , errors = errors

    """

    # git data from post form
    if request.method == "POST":

        # check if an instructor
        instructor = User.objects.get(username=username)
        if not instructor.is_staff:
            return JsonResponse({'error': 'Not permitted to create course'}, status=403)

        course_code = request.POST['code']
        course_name = request.POST['name']
        level = request.POST['level']

        # validate fileds
        errors = []

        # check if course code is exists 
        if (value_is_exists("course_code",course_code,Course)):
            errors.append({"coursecode":"course code already exist"})

        # check if course name is valid 
        if course_name.isalpha() == False:
            errors.append({"coursename" : "course name is not valid"})

        # validate level 
        try:
            int(level)
            if int(level) > 7:
                errors.append({"levellen" : "level must be less than 7"})
        except:
            errors.append({"levelint" : "level must be integer"})

        # check if not found errors 
        if len(errors) != 0:
            return JsonResponse({'errors': errors}, status=400)
        

        # add data to database 
        course = Course(created_by_instructor=instructor ,course_code = course_code, course_name = course_name, level = level)
        
        # commit change 
        course.save()

        # if no errors return success 
        return JsonResponse({'success': True}, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


@require_http_methods(['GET'])
def join_course(request, username, course_code):
    """
    This view function would make relation between two tables {course, student}

    if data was valid Return: 
        json = success:True 
        and save data in database
    if data not valid Return:
        json = success:false , errors = errors
    """

    #get data from post 
    if request.method == 'GET':
        
        # check if the user is in the same level and allowed to enter a course
        user = User.objects.get(username=username)
        course_to_join = Course.objects.get(course_code=course_code)
        
        if course_to_join is None:
            return JsonResponse({'error': 'Soemthing went Wrong in frontend, No such Course'}, status=404)

        if (
            (username != course_to_join.created_by_instructor.username) 
            and (not user.is_staff) 
            and (user.level == course_to_join.level)
            ):

            # check if the user didn't yet enrolled
            is_enrolled = user.enrolled_courses.get(course_code=course_code)
            if is_enrolled:
                return JsonResponse({'error': 'Student Already Enrolled in this course'}, status=403)

            # log the user into the course
            course_to_join.students.add(user)
            course_to_join.save()

            return JsonResponse({'success': True}, status=200)
    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)


@require_http_methods(['GET'])
def view_material(request, username, course_code):
    """
    This view function will return the path of material that belong 
    to specific course

    if data was valid Return: 
        json = success:True 
        and retrive data from database
    if data not valid Return:
        json = success:false , errors = errors
    """
    if request.method == "GET":
        #return JsonResponse({"name":username}, status=200)
        errors = []

        # try to get student that ask the course
        try:
            user = User.objects.get(username = username)
        except:
            errors.append({"username":"user name not exist"})
        # try to get the course
        try:
            code = Course.objects.get(course_code = course_code)
        except:
            errors.append({"course":"course not exist"})
        
        # if errors found return errors 
        if len(errors) != 0:
            return JsonResponse({'errors': errors}, status=400)

        # check if student join the course
        if code.students.filter(username=username).count() == 0:
            return JsonResponse({"error":"student not join course"}, status=400)
        
        else:
            # fetch matiral from database 
            matrials = code.uploaded_materials.all()
            # matrials = Matrial.objects.filter(course=code).values()

            # list the path of  matiral 
            list_of_matrial = []
            for matrial in matrials:
                list_of_matrial.append({"id":matrial.id,"path" : matrial.path , "description":matrial.description})
        
            return JsonResponse({ "matrials": list_of_matrial }, status=200)
    
    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)


@require_http_methods(['POST'])
@csrf_exempt
def upload_material(request, username, course_code):

    """
    This view function will take file and save it in media folder 
    to specific course

    if data was valid Return: 
        json = success:True 
    if data not valid Return:
        json = errors = errors
    """

    if request.method == "POST":
       
        errors = []

        # try to get user that upload file
        try:
            user = User.objects.get(username = username)
        except:
            errors.append({"username":"user name not exist"})
        # try to get the course
        try:
            course_code = Course.objects.get(course_code = course_code)
        except:
            errors.append({"course":"course not exist"})
        
        # if errors found return errors 
        if len(errors) != 0:
            return JsonResponse({'errors': errors}, status=400)
        # check if student join the course or is staff
        try:
            course_code.students.filter(username=user) or user.is_staff
        except:
            return JsonResponse({"error":"user and course not match"}, status=400)
        
        # get description and check it 
        description = request.POST["description"];
            
        # get file that come from server 
        myfile = request.FILES['file']
        fs = FileSystemStorage()
        # get base dir of project
        base_dir = os.path.dirname(os.path.dirname(__file__))
        # make dir called media to upload file 
        media_root = os.path.join(os.path.dirname(base_dir), 'Online-Schooling-Platform' , 'media')
        # save uploaded file in media folder
        filename = fs.save(os.path.join(media_root , myfile.name), myfile)
        # get name of file
        uploaded_file_name = fs.path(filename).split("\\")[-1]
        # save data in database 
        matrial = Matrial(user=user ,course = course_code, path = uploaded_file_name, description=description)
        matrial.save()
            
        return JsonResponse({'success': True}, status=200)
        
    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)

        return JsonResponse({'success': True}, status=200)


@require_http_methods(['GET'])
def delete_material(request, username, mat_id):
    """
    This view function will take username and material id and delete the material 

    if data was valid Return: 
        json = success:True 
    if data not valid Return:
        json = errors = errors
     """
    
    # i use get becouse delete not work 
    if request.method == 'GET':
        # try to get user name 
        try:
            user = User.objects.get(username=username)
        except:
            return JsonResponse({'error': 'User not found'}, status=403)
        # try to get material 
        try:
            mat_to_delete = Matrial.objects.get(id=mat_id)
        except:
            return JsonResponse({'error': 'material no found'}, status=403)
        # check if user log in login 
        #must use it even if use @login_require
        if user.username != request.user.username:
            return JsonResponse({'error': 'user name not match'}, status=403)

        # check if user is staff 
        if not user.is_staff:
            return JsonResponse({'error': 'User not allowed to delete'}, status=403)

        # delete
        mat_to_delete.delete()

        # THIS METHOD SHOULD NOT RETURN ANYTHING BUT FOR TESTING, RETURN SUCCESS
        return JsonResponse({'success': True}, status=200)
    else:
        return JsonResponse({'error': 'Method not Allowed'}, status=405)
