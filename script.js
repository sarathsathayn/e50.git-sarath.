$(document).ready(function () {
    $("#registration-Form").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            

            },
            email: {
                required: true,
                email: true
            },
            
            
            phone: {
                required: true,
                minlength: 10
            },
            adress: {
                maxlength: 50
            }

        },
        messages: {
            username: {
                required: "Please enter your username",
                minlength: "Your username must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            
            
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
