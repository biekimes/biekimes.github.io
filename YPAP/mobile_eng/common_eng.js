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
    if ($(window).width() > 400) {
        window.location.href = "../eng_version/home_eng.html"
    }

    $(".dropdown-menu").hide();
    $(".dropdown").click(function () {
        $(this).children(".dropdown-menu").stop().slideToggle(300);
        $(this).not(this).click(function () {
            $(this).children(".dropdown-menu").slideUp()
        })
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
        $(".profile:hidden").slice(0, 1).slideDown(200);
        if ($(".profile:hidden").length === 0) {
            $(this).attr("disabled", "true")
        }
    });

    $(".top_btn").on('click', function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 100);
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
        $(".contact_form").hide(100)
        $("#overlay").css("display", "none");
        return false;
    });

    $("blockquote").hide();
    $(".result").click(function () {
        let arnie = $("#arnie");
        let cujo = $("#cujo");
        let jelly = $("#jelly");
        let buddy = $("#buddy");
        let chonks = $("#chonks");
        let woody = $("#woody");
        let paul = $("#paul");
        let kookie = $("#kookie");
        let amaia = $("#amaia");
        let nike = $("#nike");
        let ari = $("#ari");
        let max = $("#max");
        let laddie = $("#laddie");
        let hatchi = $("#hatchi");

        const dogs = [
            {
                id: "arnie",
                size: 2,
                calm: false,
                alone: false,
            },
            {
                id: "cujo",
                size: 2,
                calm: true,
                alone: true,
            },
            {
                id: "woody",
                size: 1,
                calm: false,
                alone: false,
            },
            {
                id: "jelly",
                size: 2,
                calm: false,
                alone: true,
            },
            {
                id: "buddy",
                size: 2,
                calm: true,
                alone: true
            },
            {
                id: "paul",
                size: 1,
                calm: true,
                alone: true
            },
            {
                id: "chonks",
                size: 1,
                calm: false,
                alone: true
            },
            {
                id: "kookie",
                size: 2,
                calm: true,
                alone: false
            },
            {
                id: "amaia",
                size: 2,
                calm: false,
                alone: true
            },
            {
                id: "nike",
                size: 2,
                calm: false,
                alone: true
            },
            {
                id: "ari",
                size: 1,
                calm: true,
                alone: true
            },
            {
                id: "max",
                size: 2,
                calm: false,
                alone: false
            },
            {
                id: "laddie",
                size: 2,
                calm: false,
                alone: false
            },
            {
                id: "hatchi",
                size: 2,
                calm: true,
                alone: true
            }
        ]


        if ($("input").not(":checked")) {
            $("blockquote").show(100);
            //surveyCheck();
        }

        if ($("#aloneYes").is(":checked") && $("#bigYes").is(":checked") && $("#activeYes").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size > 1;
            }).filter(function (dog) {
                return dog.calm === false;
            }).filter(function (dog) {
                return dog.alone === true;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(".result").attr("disabled", "true")
        } else if ($("#aloneYes").is(":checked") && $("#bigYes").is(":checked") && $("#activeNo").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size > 1;
            }).filter(function (dog) {
                return dog.calm === true;
            }).filter(function (dog) {
                return dog.alone === true;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneYes").is(":checked") && $("#bigNo").is(":checked") && $("#activeYes").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size < 2;
            }).filter(function (dog) {
                return dog.calm === false;
            }).filter(function (dog) {
                return dog.alone === true;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneYes").is(":checked") && $("#bigNo").is(":checked") && $("#activeNo").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size < 2;
            }).filter(function (dog) {
                return dog.calm === true;
            }).filter(function (dog) {
                return dog.alone === true;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            //  !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneNo").is(":checked") && $("#bigNo").is(":checked") && $("#activeYes").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size < 2;
            }).filter(function (dog) {
                return dog.calm === false;
            }).filter(function (dog) {
                return dog.alone === false;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneNo").is(":checked") && $("#bigNo").is(":checked") && $("#activeNo").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size < 2;
            }).filter(function (dog) {
                return dog.calm === true;
            }).filter(function (dog) {
                return dog.alone === true;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneNo").is(":checked") && $("#bigYes").is(":checked") && $("#activeNo").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size > 1;
            }).filter(function (dog) {
                return dog.calm === true;
            }).filter(function (dog) {
                return dog.alone === false;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        } else if ($("#aloneNo").is(":checked") && $("#bigYes").is(":checked") && $("#activeYes").is(":checked")) {
            let result = dogs.filter(function (dog) {
                return dog.size > 1;
            }).filter(function (dog) {
                return dog.calm === false;
            }).filter(function (dog) {
                return dog.alone === false;
            });
            $(result).each(function (i, obj) {
                $("#" + obj.id).slideDown()
            });
            // !surveyCheck();
            $("blockquote").hide(100);
            $("header").slideDown(200);
            $(this).attr("disabled", "true");
        }

    })

    $(".clear").click(function () {
        $("header").slideUp(100);
        $(".adopt_row >div").slideUp(200);
        $("#survey input").prop("checked", false);
        $(".result").removeAttr("disabled");
        $("blockquote").hide(100);
    });


})