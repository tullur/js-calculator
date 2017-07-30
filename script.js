//Действие, выполняемое при клике на любую кнопку
$(".btn").click(function () {
    var textArea = $("#inputVal");
    var str = (textArea.val()).toString();

    if (this.innerHTML != "=" && this.innerHTML != "√") {
        if (str != "") {
            if ((isNaN(str[str.length - 1]) && str[str.length - 1] != ")") && (isNaN(this.innerHTML)) && this.innerHTML != "(" && this.innerHTML != ")") {} else if (this.innerHTML == "." && checkNumber(findNum(textArea.val()))) {
                textArea.val(textArea.val() + ".");
            } else if (this.innerHTML == "." && checkNumber(findNum(textArea.val())) == false) {} else {
                textArea.val(textArea.val() + this.innerHTML);
            }
        } else if (str == "" && !(isNaN(this.innerHTML)) || this.innerHTML == "(" || this.innerHTML == "-") {
            textArea.val(textArea.val() + this.innerHTML);
        }
    } else if (this.innerHTML == "√") {
        textArea.val(Math.sqrt(textArea.val()));
    } else {
        textArea.val(eval(textArea.val()));
    }

    if (this.innerHTML == "c") {

        textArea.val("");
    }
});

var textarea = document.querySelector('#inputVal');
var btn = document.querySelectorAll('button');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', autosize);
    btn[i].addEventListener('click', playAudio);
}


function autosize() {
    var el = textarea;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';

        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

function playAudio() {
    var myAudio = new Audio;
    myAudio.volume = 0.05;
    myAudio.src = "M1.mp3";
    myAudio.play();
}

function checkNumber(x) {
    if (x % 1 == 0) {
        return true;
    } else
        return false;
}

function findNum(str) {
    for (var i = str.length - 1; i >= 0; i--) {
        if (isNaN(str[i])) {
            if (str[i] == ".") {
                continue;
            }
            return str.substring(i + 1, str.length);
        }

    }
    return str;
}
