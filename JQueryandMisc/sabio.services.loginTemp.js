

sabio.services.speakeasy = sabio.services.speakeasy || {};

sabio.services.speakeasy.insert = function (data, onSuccess, onError) {

    var url = urlPrefix + "/api/users/register";
=======
=======
 var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'
sabio.services.speakeasy.insert = function (data, onSuccess, onError) {

>>>>>>> f7dd5bbedfb9d1afc29f2c95ce5b82202f8ae086
    var url = "https://pacoima-ypi.azurewebsites.net" + "/api/users/register";
>>>>>>> 0914f778a6a0162af9ad5e313ee0274ab565f2ad:scripts/sabio.services.login.js


    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
<<<<<<< HEAD
<<<<<<< HEAD:scripts/ajaxcalls.js
          ,type: "POST"
         ,xhrFields: {
            withCredentials: true
         }
=======
=======

>>>>>>> f7dd5bbedfb9d1afc29f2c95ce5b82202f8ae086
        , type: "POST",
        xhrFields: {
            withCredentials: true


        }
>>>>>>> 0914f778a6a0162af9ad5e313ee0274ab565f2ad:scripts/sabio.services.login.js
    };
    $.ajax(url, settings)
}



sabio.services.speakeasy.loginUser = function (data, onSuccess, onError) {
<<<<<<< HEAD
<<<<<<< HEAD:scripts/ajaxcalls.js
    var url =  urlPrefix + "/api/users/login/force";
=======
=======

>>>>>>> f7dd5bbedfb9d1afc29f2c95ce5b82202f8ae086
    var url = "https://pacoima-ypi.azurewebsites.net" + "/api/users/login/force";
>>>>>>> 0914f778a6a0162af9ad5e313ee0274ab565f2ad:scripts/sabio.services.login.js


    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
<<<<<<< HEAD
<<<<<<< HEAD:scripts/ajaxcalls.js
        , type: "POST"
         
         ,xhrFields: {
            withCredentials: true
         }
=======
=======

>>>>>>> f7dd5bbedfb9d1afc29f2c95ce5b82202f8ae086
        , type: "POST",
        xhrFields: {
            withCredentials: true

        }
>>>>>>> 0914f778a6a0162af9ad5e313ee0274ab565f2ad:scripts/sabio.services.login.js
    };
    $.ajax(url, settings)
}

