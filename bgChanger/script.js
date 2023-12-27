const getRandomColor = function () {
    const hex = "123456789ABCDEF"
    color = "#"
    
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

let interval
const startChanging = function () {
    if (!interval) {
        interval = setInterval(changeBgColor, 1000)
        console.log('started');
    }

    function changeBgColor() {
        document.body.style.backgroundColor = getRandomColor()
    }
}

const stopChanging = function () {
    clearInterval(interval)
    interval = null
    console.log('stopped');
}

document.getElementById('start').addEventListener('click', startChanging)
document.getElementById('stop').addEventListener('click', stopChanging)

