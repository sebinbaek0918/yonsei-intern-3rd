const batteryText = document.getElementById('battery-text');
const batteryFill = document.getElementById('battery-fill');
const blindTime = document.getElementById('time');


let battery = 100;
let lastTime = 0;

// 배터리 감소 함수
function decreaseBattery(timestamp) {
    if (!lastTime) lastTime = timestamp; 

    const elapsed = timestamp - lastTime; // 경과 시간 계산

    if (elapsed >= 1000) { // 1초 경과 시
        if (battery > 0) {
            battery--; // 배터리 감소
            batteryText.textContent = `${battery}%`; // 텍스트 업데이트
            batteryFill.style.width = `${battery}%`; // 배터리 색상 너비 조정

            // 배터리 색상 변경
            if (battery <= 20) {
                batteryFill.style.backgroundColor = 'red';
            } else if (battery <= 50) {
                batteryFill.style.backgroundColor = 'yellow';
            } else {
                batteryFill.style.backgroundColor = 'green';
            }
        } else {
            batteryText.textContent = '0%';
        }
        lastTime = timestamp; // 이전 시각 갱신
    }

    if (battery > 0) {
        requestAnimationFrame(decreaseBattery);
    } else {
        blindTime.style.display = 'none'; // 배터리가 0일 때 시간 부분 사라짐
    }
}

requestAnimationFrame(decreaseBattery);
