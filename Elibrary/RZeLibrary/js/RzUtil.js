$(document).ready(function() {
    $("#frmSubscribe").validate({
        rules: {
            txtSubscriberName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            txtEmail: {
                required: true,
                email: true
            },
            dateOfSub: {
                required: true,
                date: true,
                notGreaterThanCurrentDate: true
            }
        },
        messages: {
            txtSubscriberName: {
                required: "Subscriber Name is required!",
                minlength: "Minimum name letters is 2",
                maxlength: "Maximum letters is 20"
            },
            txtEmail: {
                required: "Subscriber Email is required!",
                email: "Email must be Valid"
            },
            dateOfSub: {
                required: "Date of Subscription is required",
                date: "Enter a valid date",
                notGreaterThanCurrentDate: "Date must not be greater than the current date"
            }

        },
        submitHandler: function(form) {
            console.info("Subscribe Form is valid");
        }

    });

    // Validation rules for the Settings Page
    $("#frmSettings").validate({
        rules: {
            txtDefaultSub: {
                required: true,
                email: true
            },
        },
        messages: {
            txtDefaultSub: {
                required: "Subscriber Email is required",
                email: "Email must be valid"
            },
        },
        submitHandler: function(form) {
            console.info("Settings Form is valid");
        }
    });

    $.validator.addMethod("notGreaterThanCurrentDate", function (value, element) {
        var selectedDate = new Date(value);
        var currentDate = new Date();
        return selectedDate <= currentDate;
    }, "Date must not be greater than the current date");
});