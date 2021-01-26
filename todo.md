
# login
# usage: 
        '127.0.0.1:8000/api/login/'     OR
        'localhost/api/login/'
        
# method 
        'POST'

# returings
    if not success
        {
            'error': 'message',
            'status': status_code
        }

        code(401): if wrong credintials
        code(405): if you used an inallowed reqeuest method like GET

    if success
        {
            'success': true,
            and_all_the_user_data_will_be_passed_back_int_that_same_json
        }
        
        code(200): OK