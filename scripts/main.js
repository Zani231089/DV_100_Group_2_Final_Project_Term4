// Run code when the document loads
$(document).ready(function() {

    // Call the function to get and log the data for cocktails starting with the letter 'a'

});

function getMovie(){

    const apiUrl = 'https://api.themoviedb.org/3/authentication';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data){

            //Where we display our results
            console.log(data)
        },

        error: function(error){
            console.error('Error', error);
        }
    })
}
  