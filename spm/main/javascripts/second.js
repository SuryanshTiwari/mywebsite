var captionLength = 0;
var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    console1 = $('.console');
    testTypingEffect("Press Enter to continue...").then(function()
    {
        $(document).keypress(function (e) {
            if (e.which == 13) {
                testErasingEffect().then(function(){
                    window.location.replace("http://localhost:3000/api/");
                });
            }
    });
});
});
function reset(){
    caption = '';
    captionLength = 0;
}
function testTypingEffect(pass) {
    var defer = $.Deferred();
    caption = pass;
    type();
    setTimeout(function () {
        defer.resolve();
    }, 1000);
    return defer;
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 20);
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
    return defer;
    // } else {
    //     $('#caption').html("You didn't write anything to erase, but that's ok!");
    //     setTimeout('testErasingEffect()', 1000);
    // }
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