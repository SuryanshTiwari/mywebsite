// $(function() {
//   $( ".spotlight" ).draggable();
//   $( ".drophere" ).droppable({
//     drop: function( event, ui ) {
//       $( ".success" ).addClass( "showme" );
//     }
//   });
// });

// intro part 
var captionLength = 0;
var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    console1 = $('.console');
    testTypingEffect("Press Enter to know about me").then(function(){
        caption = "Hi! My name is Surayans Tiwari. I am currently completing my double majors at Birla Institute of technology and science. I am an Algorithms enthusiast and web developer.";
        caption += "My hobbies ranges from watching tv series{ lot of them }, dancing, reading about superheroes, music{ofcourse!} and taking part in programming contest. Press Enter to have a look at my resume";
        $(document).keypress(function (e) {
        if (e.which == 13) {
            testTypingEffect(caption).then(function(){ 
                $(document).keypress(function (e) {
                    if (e.which == 13) {
                        window.location.replace("https://he-s3.s3.amazonaws.com/media/userdata/32963/resume-b915fe3cdc9e11e7b74c061447475ad8.pdf?Signature=tSOHVFog1nMToUmgX7RGRnerNoc%3D&Expires=1514979093&AWSAccessKeyId=AKIAIDRXK3ZWDNTBIPQA");
                    }
                });
            });
       }
    });
    });
    
    
});

// function reset(){
//     caption = '';
//     captionLength = 0;
// }
function testTypingEffect(pass) {
    var defer = $.Deferred();
    caption = pass;
    type();
    setTimeout(function () {
        defer.resolve();
    }, 2000);
    return defer;
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    var defer = $.Deferred();
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    }
    setTimeout(function () {
        defer.resolve();
    }, 1000);
    
    //  else {
    //     $('#caption').html("You didn't write anything to erase, but that's ok!");
    //     // setTimeout('testErasingEffect()', 1000);
    // }
    return defer;
}

function erase() {
    var dfd = new $.Deferred();
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 20);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}