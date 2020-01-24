$(document).ready(function() {
    $(".game__toggle_item").on('click', function(event) {
        $(".game__toggle_item").removeClass("active");
        $(this).addClass("active");
        console.log(event.target.id)
        if (event.target.id === "info" || event.target.id === "svg1" || event.target.id === "par1") {
            $(".firstTab").show();
            $(".secondTab").hide();
            $(".thirdTab").hide();
        }
        if (event.target.id === "raiting" || event.target.id === "svg2" || event.target.id === "par2") {
            $(".firstTab").hide();
            $(".secondTab").show();
            $(".thirdTab").hide();
        }
        if (event.target.id === "buy" || event.target.id === "svg3" || event.target.id === "par3") {
            $(".firstTab").hide();
            $(".secondTab").hide();
            $(".thirdTab").show();
        }

    });
    // $(".click").on("click", function(event) {

    // })

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
        $('.score').text((rezult / 10).toFixed(1))
        setProgress(rezult);
    })
    console.log(rezult)
    setProgress(rezult);
    // $(".game__toggle_item").on("click", function(event) {
    //     let target = event.target.id;
    //     console.log(target)
    //     if (target.is("#info")) {
    //         $(this).replaceWith(".firstTab");
    //     }
    //     if (target.is("#raiting")) {
    //         $(this).replaceWith(".secondTab");
    //     }
    //     if (target.is("#buy")) {
    //         $(this).replaceWith(".thirdTab");
    //     }
    // })
});