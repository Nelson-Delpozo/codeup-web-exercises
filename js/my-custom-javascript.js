"use strict";

$(document).ready(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    alert("The DOM has finished loading!");
//////////////////////////////////////////

    let contents = $('#codeup').html();
    alert(contents)

////////////////////////////////////////////

    $('.important').css('background-color', 'yellow');

//////////////////////////////////////////

    $('p').css('font-size', '14px');

    ////////////////////////////////////////

    $('.important, p').css('background-color', 'orange');

    ///////////////////////////////////////////////

    $('*').css('border', '1px solid #F00');

    ////////////////////////////////////////////////////

});
