
let hourCount = document.querySelector('.hour-count')
let minCount = document.querySelector('.min-count')
let secCount = document.querySelector('.sec-count')
let AmPM = document.querySelector('.ampm')
let icons = document.querySelector('.icons')
let mainContainer = document.querySelector('.main-container')

icons.addEventListener('click', function () {
    mainContainer.classList.toggle('darkness')
})

function myTime() {
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    let amPm = hours > 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours = hours - 12
    }
    else {
        hours
    }

    hours = hours === 0 ? 12 : hours
    hours = hours < 10 ? '0' + hours : hours
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    hourCount.innerHTML = hours
    minCount.innerHTML = min
    secCount.innerHTML = sec
    AmPM.innerHTML = amPm

    if (hours > 12) {
        mainContainer.classList.add('darkness')
    }

}

setInterval(myTime, 1000);