
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

# view_specific_course (for student)

### url endpoint

'127.0.0.1/api/view-stu-course/username/course_code/'



### HTTP Method

'GET'



### Required data

as URL parameters pass the username of the student and the course_code to view all its related details

and matrials



### Returns

​	**error**

​	```{error: ....,}``



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

#create course
### url endpoint

    '127.0.0.1:8000/api/create-course/<str:username>/'

### HTTP Method

    'POST'

### required data
    this route accepts data as url parameters and post parameters
    	username (instructor)
    post parameters
    code
    	name
    level (less than 7)

### returns

    ** errors **
    ```json
    {
        errors: [{"coursecode":"course code already exist"},
    	{"coursename" : "course name is not valid"},
    	{"levellen" : "level must be less than 7"},
    	{"levelint" : "level must be integer"}
    	]
    }
    
    ** success **
    ```json
    {
        success: True
    }
    ```


#join course
### url endpoint

    '127.0.0.1:8000/api/join-course/<str:username>/<str:course_code>/'

### HTTP Method

    'GET'

### required data
    this route accepts data as url parameters
    	username (student)
    coursecode


### returns

    ** errors **
    ```json
    {
        {'error': 'Soemthing went Wrong in frontend, No such Course'}
    }
    
    ```json
    {
        {'error': 'Student Already Enrolled in this course'}
    }
    
    ** success **
    ```json
    {
        success: True
    }
    ```

#view material
### url endpoint

    '127.0.0.1:8000/api/view-material/<str:username>/<str:course_code>/'

### HTTP Method

    'GET'

### required data
    this route accepts data as url parameters
    	username (student)
    coursecode


### returns

    ** errors **
    ```json
    {
        errors [
    	{"username":"user name not exist"}
    	{"course":"course not exist"}
    ]
    }
    
    ```json
    {
        {"error":"student not join course"}
    }
    
    ** success **
    ```json
    {
        success: True
    }
    ```


#upload material
### url endpoint

    '127.0.0.1:8000/api/upload-material/<str:username>/<str:course_code>/'

### HTTP Method

    'POST'

### required data
    this route accepts data as url parameters
    	username (student)
    coursecode
    in POST method
    file (type file)
    description (text)


### returns

    ** errors **
    ```json
    {
        errors [
    	{"username":"user name not exist"}
    	{"course":"course not exist"}
    ]
    }
    
    ```json
    {
        {"error":"user and course not match"}
    }
    
    ** success **
    ```json
    {
        "matrials": [
    	{"path": "dsdfdsc.txt", "description": null}, 
    	{"path": "debug_29sxBVy.log", "description": "adfasdfsdf"}
    ]
    }
    ```

# delete material
### url endpoint

    '127.0.0.1:8000/api/delete-material/<str:username>/<str:materialid>/'

### HTTP Method

    'GET'

### required data
    this route accepts data as url parameters
    	username (student)
    materialid   

### returns

    ** errors **
    ```json
    {
        {'error': 'User not found'}
    }


​	
    ```json
    {
        {'error': 'material no found'}
    }
    
    ```json
    {
        {'error': 'user name not match'}
    }
    
    ```json
    {
        {'error': 'User not allowed to delete'}
    }
    
    ** success **
    ```json
    {
        success: True
    }
    ```

## create quiz
### url endpoint
    '127.0.0.1:8000/api/create-quiz/<str:username>/<str:course_code>/'

### http method
    'POST'

### required data

    **url parameters**
    this route accepts two url parameters (course_code) for which you are going
    to create this quiz and (username) of the currently logged in instructor
    
    **post data**
    a formData obj with all of this data
    1. start_time
    2. end_time
    3. questions
    
    NOTE: the questions should be a json object with all the questions and answers


### returns

    **error**
    {
        'error': 'could not access the url parameters'
    }
    if you forget to send the url parameters


    {
        'error': 'no questions has been recieved;
    }
    if you attempt to send an empty request to the endpoint


    {
        'error': 'user not allowed to create quiz'
    }
    if the someone who not authenticated is trying to access the endpoint


    {
        'error': 'method not allowed'
    }
    if you attempt to send the request with method other than POST  


    **success**
    {
        'success': true
    }
    quiz has been created successfully now you have to notify the whole students enrolled for this
    course with this quiz


### What is the observer I had added?
its just simple counter to keep track of how many object get instantiated

of some particular class, and this is going to help us when dealing with

the notificaion part.

In the frontside there will be a function its only purpose of life is to make

somesort of request to some URL everyday in order to check for these changes.
