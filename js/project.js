let timer = document.querySelector(".timer");
setInterval(() => {
    const time = new Date();
    // console.log(time.toDateString())
    timer.innerHTML = time.toLocaleTimeString();
}, 1000);