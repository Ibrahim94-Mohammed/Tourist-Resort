$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})
var icon = document.getElementById("icon");
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");
if (localData == "light") {
    icon.src = "img/PNG/icons8-moon-symbol-30.png";
    document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
    icon.src = "img/PNG/sun.png";
    document.body.classList.add("dark-theme");
}
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "img/PNG/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "img/PNG/icons8-moon-symbol-30.png";
        localStorage.setItem("theme", "light");
    }
}