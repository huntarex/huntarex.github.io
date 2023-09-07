// main.js

document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    const bx1 = document.getElementById('bx1');
    

    btn1.addEventListener('click', function () {
        toggleVisibility(bx1);
    });

    btn2.addEventListener('click', function () {
        toggleVisibility(bx2);
    });

    btn3.addEventListener('click', function () {
        toggleVisibility(bx1);
    });

    btn3.addEventListener('click', function () {
        toggleVisibility(bx2);
    });


    function toggleVisibility(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
});

const div1re = document.getElementById("bx1");
const btn4 = document.getElementById("closebutton");

btn4.addEventListener("click", function() {
    div1re.style.display = "none";
});

const div2re = document.getElementById("bx2");
const btn5 = document.getElementById("closebutton");

btn5.addEventListener("click", function() {
    div2re.style.display = "none";
});