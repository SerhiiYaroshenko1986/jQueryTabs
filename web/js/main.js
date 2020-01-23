$(document).ready(function() {
    $(".game__toggle_item").on('click', function() {
        $(".game__toggle_item").removeClass("active");
        $(this).addClass("active");
    });


    circle = document.querySelector('circle');
    radius = circle.r.baseVal.value;
    circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    let rezult = 76;
    $('input').on('click', function(event) {

        if (event.target.id === "star1") {
            rezult = 100 / 5;
            console.log(rezult)
        }
        if (event.target.id === "star2") {
            rezult = 100 / 5 * 2;
            console.log(rezult)
        }
        if (event.target.id === "star3") {
            rezult = 100 / 5 * 3;
            console.log(rezult)
        }
        if (event.target.id === "star4") {
            rezult = 100 / 5 * 4;
            console.log(rezult)
        }
        if (event.target.id === "star5") {
            rezult = 100;
            console.log(rezult)
        }
        $('#score').text((rezult / 10).toFixed(1))
        setProgress(rezult);
    })
    console.log(rezult)
    setProgress(rezult);
});