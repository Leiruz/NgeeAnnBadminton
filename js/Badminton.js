

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function showImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function () {
    showImages('.pic1');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function () {
    showImages('.pic1');
});

document.getElementById("t&c").onchange = function () {
    form();
}
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    submit();
});
document.querySelector("form").addEventListener("reset", reset);

function form(){
    var tc = document.getElementById("t&c");
    var check1 = "";
    if ( tc.checked == true) {
        check1 = "Thank You for accepting our T&C.";
    }
    document.getElementById("check1").innerHTML = check1;
}

function submit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        check2 = "Thank you for registering with us, " + name;
        document.getElementById("check2").innerHTML = check2;
    }
    else {
        alert("Please enter a correct email address.");
        reset()
    }
    
}

function reset() {
    document.getElementById("check1").innerHTML = "";
    document.getElementById("check2").innerHTML = "";
}

