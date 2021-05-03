$(function(){
    $("#username_error_message").hide();
    $("#email_error_message").hide();
    $("#firstname_error_message").hide();
    $("#lastname_error_message").hide();
    $("#password_error_message").hide();
    $("#confirmpassword_error_message").hide();
    var username_error_message=false;
    var email_error_message=false;
    var firstname_error_message=false;
    var lastname_error_message=false;
    var password_error_message=false;
    var confirmpassword_error_message=false;
    $("#username").focusout(function(){

        check_username();
    });
    $("#useremail").focusout(function(){

        check_useremail();
    });
    $("#userfirstname").focusout(function(){

        check_userfirstname();
    });
    $("#userlastname").focusout(function(){

        check_userlastname();
    });
    $("#userpassword").focusout(function(){

        check_userpassword();
    });
    $("#userconfirmpassword").focusout(function(){

        check_userconfirmpassword();
    });

      function check_username(){
         var username_length=$("#username").val().length;
            if(username_length<5 || username_length >20){
                $("#username_error_message").html("Should be between 5-20 characters");
                $("#username_error_message").show();
                username_error_message=true;
            } else {
                $("#username_error_message").hide();
            }
        }
        function check_userpassword(){
         var password_length=$("#userpassword").val().length;
            if(password_length<8){
                $("#password_error_message").html("Not less than 8 characters");
                $("#password_error_message").show();
                password_error_message=true;
            } else {
                $("#password_error_message").hide();
            }
        }
        function check_userfirstname(){
         var firstname_length=$("#userfirstname").val().length;
            if(firstname_length<1){
                $("#firstname_error_message").html("Please enter Correct Date");
                $("#firstname_error_message").show();
                firstname_error_message=true;
            } else {
                $("#firstname_error_message").hide();
            }
        }
        function check_userlastname(){
         var lastname_length=$("#userlastname").val().length;
             lastname_value=$("#userlastname").val();
            if(lastname_length<1){
                $("#lastname_error_message").html("State the phone number");
                $("#lastname_error_message").show();
                lastname_error_message=true;
            } else {
                $("#lastname_error_message").hide();
            }
        }
        function check_userconfirmpassword(){
         var password=$("#userpassword").val();
         var confirmpassword=$("#userconfirmpassword").val();
            if(password != confirmpassword){
                $("#confirmpassword_error_message").html("Password and Confirm Password Should be same");
                $("#confirmpassword_error_message").show();
                confirmpassword_error_message=true;
            } else {
                $("#confirmpassword_error_message").hide();
            }
        }
    function check_useremail(){
        var val_email=$("#useremail").val();
        var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if(pattern.test(val_email)){
            $("#email_error_message").hide();
        } else {
            $("#email_error_message").html("Please Enter Valid email");
            $("#email_error_message").show();
            email_error_message=true;
        }
    }
    $("#registration_form").submit(function(){
        username_error_message=false;
        email_error_message=false;
        firstname_error_message=false;
        lastname_error_message=false;
        password_error_message=false;
        confirmpassword_error_message=false;
        check_username();
        check_useremail();
        check_userpassword();
        check_userconfirmpassword();
        check_userfirstname();
        check_userlastname();

        if(username_error_message==false && email_error_message==false && firstname_error_message==false && lastname_error_message==false && password_error_message==false && confirmpassword_error_message==false){
            return true;

        } else {
            return false;
        }
    });
});
$(window).load(function(){
$("#username").keyup(function(){
    var user=$("#username").val();
    $("#uname").html(user);
});
$("#useremail").keyup(function(){
    var email=$("#useremail").val();
    $("#uemail").html(email);
});
$("#userfirstname").keyup(function(){
    var fname=$("#userfirstname").val();
    $("#fname").html(fname);
});
$("#userlastname").keyup(function(){
    var lname=$("#userlastname").val();
    $("#lname").html(lname);
});
$(':checkbox').change(function() {
    if($(this).is(":checked")) {
        $("#news").html("Yes");
    } else {
        $("#news").html("");
    }
});
$('#newsletter').change(function() {

});
});


$(document).ready(function(){
    $("#registration_form").trigger('reset');
});
