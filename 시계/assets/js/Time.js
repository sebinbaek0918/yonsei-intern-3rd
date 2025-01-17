showCurrentTime();
showDate();

//  현재 시각 보여줌
function showCurrentTime(){
    let dt = new Date();
    let hours = dt.getHours().toString().padStart(2,0);
    let minutes = dt.getMinutes().toString().padStart(2,0);
    let seconds = dt.getSeconds().toString().padStart(2,0);

    let currentTime = hours+":"+minutes+":"+seconds;
    document.getElementById('time').textContent = currentTime;
    setInterval(showCurrentTime,1000);
}


// 오늘 날짜 보여줌
function showDate(){
    let dt = new Date();
    let day = dt.toString().substring(0, 3);
    let month = (dt.getMonth() + 1).toString().padStart(2, '0');
    let date = dt.getFullYear() + '-' + month + '-' + dt.getDate().toString().padStart(2, '0') + ' ' + day;
    document.getElementById('date').textContent = date;
    setInterval(showDate,1000);
}

