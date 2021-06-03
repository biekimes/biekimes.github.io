


function nameCheck() {
    var name = $("#name1");
    if ($(name).val().length < 1) {
        $("#nameAlert").show(100);
        $("#nameAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    }
    if (!isNan$(name).val()) {
        alert("이름에 숫자만 쓸수 없습니다.");
        return false;
    }
    if ($(id).val().indexOf(" ") != -1) {
        alert("이름에는 공백을 쓸수 없습니다.");
        return false;
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
    }
    return true;
}
