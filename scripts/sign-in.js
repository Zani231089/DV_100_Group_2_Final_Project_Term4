$(document).ready(function(){
    // Sign in form
    $('#signinForm').submit(function(event){
        event.preventDefault();

        if (this.checkValidity() === false){
            event.stopPropagation();
        } else {
            // Redirect to index.html
            window.location.href = '../index.html';

            // Save information to local storage
            const username = $('#username').val();
            const password = $('#password').val();

            // Store the data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }

        $(this).addClass('was-validated');
    });
});