const div1Tab = [...document.querySelectorAll("div.math div:nth-child(1)")];
const div2Tab = [...document.querySelectorAll("div.math div:nth-child(3)")];
const inputTabs = [...document.querySelectorAll("div.math input:nth-child(5)")];
const iconSpan = [...document.querySelectorAll("div.math span")];
const divFulls = [...document.querySelectorAll('div.math')];
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const windowEnd = document.querySelector('.window');
const timer321 = document.querySelector('.timer321');
const btnTryAgain = document.querySelector('p.tryAgain button');
const div1Array = [];
const div2Array = [];
const results = [];
const stoper = document.querySelector('.timer');
const yourTime = document.querySelector('.window p');
const youAre = document.querySelector('.window p:nth-child(2)');
const lastTime = document.querySelector('.lastTime');
const lastName = document.querySelector('.lastName');
const coverImg = document.querySelector('.cover');
const btnSlide = document.querySelector('.cover button').addEventListener('click', function () {
    coverImg.classList.add('slideIt');
});

const random1 = function () {
    const anyNumber1 = (Math.floor(Math.random() * 9) + 1);
    div1Array.push(anyNumber1);
    // console.log(anyNumber1);
    div1Tab[i].textContent = div1Array[i];
}

const random2 = function () {
    const anyNumber2 = (Math.floor(Math.random() * 9) + 1);
    div2Array.push(anyNumber2);
    // console.log(anyNumber2);
    div2Tab[i].textContent = div2Array[i];
}

const countAndPush = function () {
    const total = div1Array[i] * div2Array[i];
    // console.log(total);
    results.push(total);
    console.log(results);
    // console.log(div1Array);
    // console.log(div2Array);
}
time = 3;
const go = function () {
    btnStart.disabled = true;
    btnReset.disabled = true;
    const timerOn = setInterval(function () {

            timer321.textContent = time;
            time--;
            if (time === -1) {
                timer321.textContent = "Start";
                random();
                timer();
            }
            if (time === -2) {
                time = 3;
                clearInterval(timerOn);
                timer321.textContent = "";
                timer321.style.display = 'none';
                btnReset.disabled = false;
            }
        },
        1000)
}

const random = function () {
    for (i = 0; i < 10; i++) {
        inputTabs[0].focus();
        random2();
        random1();
        countAndPush();
        divFulls[0].classList.remove('remove');
    }
}
// , timer321.style.display = 'none'
const clearAll = function () {
    div1Array.splice(0, 10);
    div2Array.splice(0, 10);
    results.splice(0, 10);
    windowEnd.classList.add('top1000');
    divFulls.forEach(divFull => divFull.classList.add('remove'));
    C = 0;
    inputTabs.forEach(inputTab => inputTab.value = "")
    // time = 3;
    timer321.style.display = 'inline-block';
    iconSpan.forEach(iconSpan => iconSpan.classList.add('iconshow'));
    btnStart.disabled = false;
    stoper.textContent = '00:00s';
    timeSec = 0;
    clearInterval(intervalStart);
    active = false;
}

const resetIt = function () {
    div1Array.splice(0, 10);
    div2Array.splice(0, 10);
    results.splice(0, 10);
    divFulls.forEach(divFull => divFull.classList.add('remove'));
    C = 0;
    inputTabs.forEach(inputTab => inputTab.value = "");
    timer321.style.display = 'inline-block';
    iconSpan.forEach(iconSpan => iconSpan.classList.add('iconshow'));
    btnStart.disabled = false;
    timeSec = 0;
    stoper.textContent = '00:00s';
    active = false;
    clearInterval(intervalStart);
}

let C = 0;
const show = function (e) {
    if (inputTabs[C].value == results[C]) {
        if (e.keyCode == 13) {
            iconSpan[C].classList.remove('iconshow');
            C++;
            // divFulls[C].classList.remove('remove');
            (C === 10 ? (windowEnd.classList.remove('top1000'), clearInterval(intervalStart), yourTime.textContent = 'Twój czas to: ' + stoper.textContent + 's') :
                (divFulls[C].classList.remove('remove'), inputTabs[C].focus()));
            console.log(stoper.textContent);
            if (stoper.textContent <= 10) {
                youAre.textContent = 'Ten czas jest wręcz niemożliwy!  Jesteś Geniuszem!';
                lastName.textContent = 'Geniuszem!'
            } else if (stoper.textContent <= 13) {
                youAre.textContent = 'Matma to Twoja mocna strona! Jesteś Kozakiem!';
                lastName.textContent = 'Kozakiem!';
            } else if (stoper.textContent <= 16) {
                youAre.textContent = 'Musiałeś być niezły z matmy! Jesteś dobry!';
                lastName.textContent = 'dobry!'
            } else if (stoper.textContent <= 19) {
                youAre.textContent = 'To naprawde dobry czas! Jesteś Ponadprzeciętny!';
                lastName.textContent = 'Ponadprzeciętny!'
            } else if (stoper.textContent <= 22) {
                youAre.textContent = 'Mieścisz się w przeciętności! Jesteś conajmniej średni!';
                lastName.textContent = 'conajmniej średni!'
            } else if (stoper.textContent <= 26) {
                youAre.textContent = 'Matma nie jest Twoją mocną stroną! Jesteś humanistą?';
                lastName.textContent = 'humanistą?'
            } else if (stoper.textContent <= 30) {
                youAre.textContent = 'Słabo, słabo! Jesteś Nienajlepszy, żeby Cie nie obrazić.';
                lastName.textContent = 'Nienajlepszy, żeby Cie nie obrazić'
            } else if (stoper.textContent <= 34) {
                youAre.textContent = 'Mogło być gorzej! A nie.. nie mogło. Jesteś cienias!';
                lastName.textContent = 'cienias!'
            } else {
                youAre.textContent = 'Chyba chodziłeś na wagary zamiast na matme. Jesteś Wagarowiczem!'
                lastName.textContent = 'Wagarowiczem!'
            }
            lastTime.textContent = stoper.textContent + 's';
        }
    }
}

let timeSec = 0;
let active = false;
let intervalStart;

const timer = () => {
    if (!active) {
        active = !active
        intervalStart = setInterval(start, 10);
    } else {
        active = !active
        clearInterval(intervalStart)
    }
}
const start = () => {
    timeSec++;
    stoper.textContent = (timeSec / 100).toFixed(2);
}
const reset = () => {
    timeSec = 0;
    active = false;
    clearInterval(intervalStart)
}

btnTryAgain.addEventListener('click', clearAll);
inputTabs.forEach(inputTab => inputTab.addEventListener('keypress', show));
btnStart.addEventListener('click', go);
btnReset.addEventListener('click', resetIt)