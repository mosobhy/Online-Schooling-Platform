
# login
### usage: 
        '127.0.0.1:8000/api/login/'     OR
        'localhost/api/login/'
        
### method 
        'POST'

### required data
the following data should be sent as json object
        username
        password

### returns
    
    ** if the user doesn't exist **

    {
        error: 'invalid credintials',
        status: 401
    }

    ** if the user does exist **

    {
        success: True,
        username: ....,
        first_name: ...,
        last_name: ...,
        email: ...,
        is_staff: ...,
        ssn: ....,
        university_id: ...,
        level: ...
    }


# register_as_instructor
### url endpoint

    '127.0.0.1:8000/api/doctor/'

### HTTP Method
    'POST'

### required data
    ** a json object of the following data **

    NOTE: that the html input tags must have the same as the following data

    firstname
    lastname
    username
    email
    password
    ssn
    universityid

### returns
    if not successfully registered, you get back

    {
        errors: [
            'first name': 'first name is not valid',
            and so on for other data fields......
        ]
    }

    if successfully registered, you will get back
    {
        success: True,
        username: .....,
        firstname: ...., 

        and so on for other data fields of instructor
    }


# view_student_courses
### url endpoint

    '127.0.0.1:8000/api/view-courses/<str:username>/'

### HTTP Method

    'GET'

### required data
    this endpoind require a url parameter to be passed thourgh the url

    username

### returns

    ** errors.. **
    1. if user not logged in
    ```json
    {
        {'error': 'something went wrong, user supposed to be logged in'
    }
    ```

    2. if user has no courses to view
    ```json
    {
        error: 'NO courses to view'
    }
    ```

    ** success **
    ```json
    {
        success: True,
        courses: {
            {
                course_name: ....,
                course_code: ....,
                course_level: ....
            }, 
            {
                course_name: ...,
                and so on for all courses
            }
        }
    }
    ```
    NOTE: these courses' codes should be associated with each course in order to use 

    it again when trying to get the details of each course



# view_specific_course (for instructor)
### url endpoint

    '127.0.0.1:8000/api/view-a-course/<str:username>/<str:course_code>/'

### HTTP Method

    'GET'

### required data

    This route accept its data as a url parameters

    username    (instructor)
    course_code

### returns

    ** errors **
    ```json
    {
        error: 'User not an instructor'
    }
    ```
    but this error rarly to happen

    ```json
    {
        error: 'Something went wrong, Course has not been fetched from db'
    }
    ```
    if that happen, that means that you didn't store the course_code propery in data- attribute

    ** success **

    ```json
    {
        success: True,
        course_name: ...,
        course_code: ....,
        level: .....,
        enrolled_students: [
            {
                username: ....,
                firstname: ....,
                lastname: ....,
                email: ....,
                level: ....,
                ssn: .....,
                university_id: .....
            }, 
            {
                and so on for all students
            }
        ]
    }
    ```

# delete course
### url endpoint

    '127.0.0.1:8000/api/delete-course/<str:username>/<str:course_code>/'

### HTTP Method

    'DELETE'

### required data
    this route accepts data as url parameters

    username (instructor)
    course_code

### returns

    ** errors **
    ```json
    {
        error: 'User not allowed to delete'
    }
    ```
    this error should never appear, cuz it means that a student could access the side of instructor

    ```json
    {
        error: 'Course Not found, it sounds like an issue with frontend'
    }
    ```
    this may happen if you don't store the course_code in the data- attribute for each course

    ** success **
    ```json
    {
        success: True
    }
    ```


### What is the observer I had added?
its just simple counter to keep track of how many object get instantiated

of some particular class, and this is going to help us when dealing with

the notificaion part.

In the frontside there will be a function its only purpose of life is to make

somesort of request to some URL everyday in order to check for these changes.
