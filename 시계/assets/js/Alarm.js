const alarmForm = document.getElementById('alarm-form');
const newTimeInput = document.getElementById('new-time');
const alarmList = document.getElementById('alarm-list');
const addModal = document.getElementById('alarm-modal');
const openAddModal = document.getElementById('add-alarm-btn'); 
const closeAddModal = document.getElementById('close-modal');
const deleteModal = document.getElementById('delete-modal');
const openDeleteModal = document.getElementById('delete-alarm-btn');
const closeDeleteModal = document.getElementById('cancel-delete');
const alarmDeleteBtn = document.getElementById('confirm-delete');

// 알람 추가, 삭제 모달 열고 닫기 함수
function showAddModal() {
    addModal.style.display = 'block'; 
}

function hideAddModal() {
    addModal.style.display = 'none'; 
}

function showDeleteModal(){
    if (alarmList.children.length === 0) {
        alert('삭제할 알람이 없습니다.');
        return;
    }
    deleteModal.style.display ='block';

    const firstAlarm = alarmList.firstElementChild.textContent;
    document.getElementById('first-alarm').textContent = firstAlarm;

    
}

function hideDeleteModal(){
    deleteModal.style.display = 'none';
}

// 클릭 시 동작
openAddModal.onclick = showAddModal;
closeAddModal.onclick = hideAddModal; 
openDeleteModal.onclick = showDeleteModal;
closeDeleteModal.onclick = hideDeleteModal;


// 알람 추가 시 형식 확인 함수

function isValidTimeFormat(time) {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return timeRegex.test(time);
}

// 알람 추가 함수
function addAlarm(event) {
    event.preventDefault(); 
       
    if (alarmList.children.length >= 3) {
        alert('알람 목록이 가득 찼습니다. 삭제 후 다시 추가해주세요.');
        return;
    }

    const newTime = newTimeInput.value.trim(); 

    if (!isValidTimeFormat(newTime)) {
        alert('올바른 시간 형식이 아닙니다. (예: hh:mm:ss)');
        return;
    }

    // 시간 목록에 추가
    const listItem = document.createElement('li');
    listItem.textContent = `⏰ ${newTime}`;
    alarmList.appendChild(listItem);
    document.getElementById("alarm-form").reset();


    hideAddModal();
}

// 폼 제출 이벤트 핸들러
alarmForm.addEventListener('submit', addAlarm);

//알람 삭제
function confirmDelete() {
    // 첫 번째 알람 삭제
    if (alarmList.children.length > 0) {
        alarmList.removeChild(alarmList.firstElementChild);
    }
    hideDeleteModal();
}


// 알람 삭제 확인 버튼
alarmDeleteBtn.addEventListener('click', confirmDelete);
