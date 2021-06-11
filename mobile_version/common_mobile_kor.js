
function nameCheck() {
    var name = $("#user");
    if ($(name).val().length < 1) {
        $("#nameAlert").show(100);
        $("#nameAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    } else if ($(name).val().length >= 1) {
        $("#nameAlert").hide(100);
    }
    return true;
}

function emailCheck() {
    var email = $("#email");
    if ($(email).val().length < 1) {
        $("#emailHelp").hide();
        $("#emailAlert").show(100);
        $("#emailAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    } else if ($(email).val().length >= 1) {
        $("#emailAlert").hide(100);
    }
    return true;
}

function titleCheck() {
    let title = $("#title");
    if ($(title).val().length < 1) {
        $("#titleAlert").show(100);
        $("#titleAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    } else if ($(title).val().length >= 1) {
        $("#titleAlert").hide(100);
    }
    return true;
}

function msgCheck() {
    let msg = $("#msg");
    if ($(msg).val().length < 1) {
        $("#msgAlert").show(100);
        $("#msgAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    } else if ($(msg).val().length >= 1) {
        $("#msgAlert").hide(100);
    }
    return true;
}

$(function () {

    $(".dropdown-menu").hide();
    $(".dropdown").click(function () {
        $(this).children(".dropdown-menu").stop().slideToggle(300);
        $(this).not(this).click(function () {
            $(this).children(".dropdown-menu").slideUp()
        })
    });

    $(".contact_form").hide();
    $("#contact").click(function () {
        $(".contact_form").fadeIn(300);
        $("#overlay").css("display", "block");
    });

    $("#nameAlert").hide();
    $("#emailAlert").hide();
    $("#titleAlert").hide();
    $("#msgAlert").hide();
    $("form").submit(function (e) {
        if (!nameCheck()) return false;
        if (!emailCheck()) return false;
        if (!titleCheck()) return false;
        if (!msgCheck()) return false;
    });

    $(".contact_form button:nth-of-type(2)").click(function () {
        $(".contact_form").hide(100);
        $("#overlay").css("display", "none")
        return false;
    });

    $(".profile .img").mousedown(function () {
        $(this).parents(".profile").css({
            "border": "5px solid #747E48",
            "border-radius": "10px",
            "box-sizing": "border-box"
        });
    })


    $(".hide").hide();
    $(".show_more").click(function () {
        $(".hide:hidden").slice(0, 1).slideDown(200);
        if ($(".hide:hidden").length === 0) {
            $(this).attr("disabled", "true")
            $(this).text("더없음")
        }
    });

    $(".top_btn").on('click', function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 100);
    });

})