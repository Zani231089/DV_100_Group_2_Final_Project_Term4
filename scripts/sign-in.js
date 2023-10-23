$(document).ready(function(){

    //Sign in form

    //On submit, prevent default form submission behaviour and do this instead

    $('#signinForm').submit(function(event){

        event.preventDefault();

        if (this.checkValidity() === false){
            event.stopPropagation();
        }else {
            window.location.href = 'index.html';
        }

        $(this).addClass('was-validated');
    })
})