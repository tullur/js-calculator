//var signs=["√","Pi","e","/","1","2","3","*","4","5","6","-","7","8","9","+","0",".","c","="];
//var calc=document.getElementById("calc");
// 
////Добавление кнопок к форме калькулятора
//for(var i=0;i<signs.length;i++){
//    calc.innerHTML+="<button class=btn>"+signs[i]+"</button>";
//}

//Действие, выполняемое при клике на любую кнопку
$(".btn").click(function () {
    var textArea = $("#inputVal");
    if (this.innerHTML != "=" && this.innerHTML != "√" & this.innerHTML != "Pi" & this.innerHTML != "e") {
        //Добавление значения кнопки в текстовое поле
        textArea.val(textArea.val() + this.innerHTML);
    } else if (this.innerHTML == "Pi") {
        textArea.val(textArea.val() + 3.14);
    } else if (this.innerHTML == 'e') {
        textArea.val(textArea.val() + 2.71);
    } else if (this.innerHTML == "√") {
        textArea.val(Math.sqrt(textArea.val()));
    } else {
        //Если нажата кнопка "=", то, приведя выражение
        // в текстовом поле к javascript, вычислить значение
        textArea.val(eval(textArea.val()));
    }
    //Если нажата кнопка "с", то стирает все из текстового поля
  
if (this.innerHTML == "c") {
        var str =(textArea.val()).toString();
        
        textArea.val(str.substring(0, str.length - 2));
    }
});



var textarea = document.querySelector('#inputVal');
var btn = document.querySelectorAll('button');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', autosize);
}



function autosize() {
    var el = textarea;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}
