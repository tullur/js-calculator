//Действие, выполняемое при клике на любую кнопку
$(".btn").click(function () {
    var textArea = $("#inputVal");
    var str = (textArea.val()).toString();
    var p = Math.PI;
    var e = Math.E;

    if (this.innerHTML != "=" && this.innerHTML != "√") {
        if (str != "") {
            if (
                (str[str.length - 1] == '/' || str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == '*' || str[str.length - 1] == "p" || str[str.length - 1] == ".") &&
                (this.innerHTML == '/' || this.innerHTML == '+' || this.innerHTML == '-' || this.innerHTML == '*' || this.innerHTML == "p" || this.innerHTML == '.')) {} else {
                textArea.val(textArea.val() + this.innerHTML);
            }
        } else if (str == "" && (this.innerHTML != '/' && this.innerHTML != '+' && this.innerHTML != '*' && this.innerHTML != '.')) {
            textArea.val(textArea.val() + this.innerHTML);
        }

    }
    //    else if (this.innerHTML == "p") {
    //        textArea.val(textArea.val() + "p");
    //    } 
    //    else if (this.innerHTML == 'e') {
    //        textArea.val(textArea.val() + "e");
    //} 
    else if (this.innerHTML == "√") {
        textArea.val(Math.sqrt(textArea.val()));
    } else {
        textArea.val(eval(textArea.val()));
    }
    //Если нажата кнопка "с", то стирает все из текстового поля
    if (this.innerHTML == "c") {
        textArea.val("");
        //textArea.val(str.substring(0, str.length - 1));
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
