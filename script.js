function timer() {
    let nowDate = new Date();
    const achiveDate = new Date(2020, 0);
    let result = (achiveDate - nowDate) + 1000;
    if (result <= 0) {
        alert('YoHooooo!!!');
    }

    let days = Math.floor(result/1000/60/60/24);
    let hours = Math.floor((result/1000/60/60)%24);
    let minutes = Math.floor((result/1000/60)%60);
    let seconds = Math.floor((result/1000)%60);

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
    setTimeout(timer, 1000);
}
timer();
