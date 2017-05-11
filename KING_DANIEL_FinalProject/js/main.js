// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
   $("#jobsrequest").validate({
       rules: {
           name: {
            required: true
           },
           email_1: {
               required: true,
               email: true
           },
           email_2: {
               required: true,
               email: true,
               equalTo: "#email_1"
           },
           address: {
               required: true,
               address: true
           },
           city: {
               required: true,
           },
           phonenumber: {
               required: true,
               digits: true
           },
       },
       messages: {
           name: {
               required: "Please enter your first and last name"
           },
           email_1: {
               required: "Please enter a valid email address"
           },
           email_2: {
               required: "Please enter a valid email adress",
               equalTo: "Please enter the same email address"
           },
           address: {
               required: "Please enter a valid address"
           },
           city: {
               required: "Please enter the name of a city"
           },
           phonenumber: {
               required: "Please enter a valid U.S. Phone Number"
           },
       }
       
   });

});