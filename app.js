let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursBox = document.querySelector('.hours'),
    minutesBox = document.querySelector('.minutes');




function startWatch() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    secondArrow.style = `transform:rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform:rotate(${minutes * 6}deg)`
    hourArrow.style = `transform:rotate(${hours * 30}deg)`

    hoursBox.innerHTML = hours
    minutesBox.innerHTML = minutes

    setTimeout(() => startWatch(), 1000)

}

startWatch()


let li = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

li.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')

    })
})


function removeActive() {
    li.forEach((el, index) => {
        el.classList.remove('active')
        tabs[index].classList.remove('active')
    })
}





//рекурсия - когда функция запускает саму себя, внутри себя


// задание секундомер

let hourSecundomer = document.querySelector('.stopwatch__hours'),
    minuteSecundomer = document.querySelector('.stopwatch__minutes'),
    secondSecundomer = document.querySelector('.stopwatch__seconds'),
    btnSecundomer = document.querySelector('.stopwatch__btn'),
    tabsSecundomer = document.querySelector('.tabsLink__span');

btnSecundomer.addEventListener('click', () => {
    if(btnSecundomer.innerHTML == 'start' ){
        btnSecundomer.innerHTML = 'stop'
        tabsSecundomer.classList.add('active')
        startStopwatch()
    }else if (btnSecundomer.innerHTML == 'stop' ){
        tabsSecundomer.classList.remove('active')
        btnSecundomer.innerHTML = 'clear'
    } else if (btnSecundomer.innerHTML == 'clear') {
        btnSecundomer.innerHTML = 'start'
        hourSecundomer.innerHTML = '0'
        minuteSecundomer.innerHTML = '0'
        secondSecundomer.innerHTML = '0'
    }
})

function startStopwatch () {
    secondSecundomer.innerHTML = +secondSecundomer.innerHTML + 1;
    if(+secondSecundomer.innerHTML == 59 ){
        secondSecundomer.innerHTML = '0'
        minuteSecundomer.innerHTML = +minuteSecundomer.innerHTML + 1;
    }

    if (+minuteSecundomer.innerHTML == 59 ){
        minuteSecundomer.innerHTML = '0'
        hourSecundomer.innerHTML = +hourSecundomer.innerHTML + 1;
    }

    if (btnSecundomer.innerHTML === 'stop') {
        setTimeout(startStopwatch, 1000)
    }
}