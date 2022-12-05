function populateYearInput(numberOfYears){
    let today = new Date();
    thisYear = Hebcal.HDate(today).year;
    let arr = [];
    for(let i = thisYear; i < thisYear + numberOfYears; i++){
        arr.push({value : i, text : i})
    }
    populateSelectDD('year-input', arr);
}

function populateMonthInput(){
    let MONHTS = ["Tishrei", "Cheshvan", "Kislev", "Teives", "Shvat", "Adar", "Nissan", "Iyar", "Sivan", "Tamuz", "Av", "Elul"];
    MONHTS = MONHTS.map(function(month, index){
        return { text : month, value : index};
    });  
    populateSelectDD('month-input', MONHTS);
}

function populateDaysOfMonthInput(){
    let daysOfMonth = [];
    for(let i = 1; i <= 30; i++){
        daysOfMonth.push({text : i, value : i});
    }
    populateSelectDD('day-input', daysOfMonth);
}

/**
 * 
 * @param {String} selectId 
 * @param {Array<Object>} arr 
 */
function populateSelectDD(selectId, arr){
    let selectElement = document.getElementById(selectId);
    for(let el of arr){
        let optionElement = document.createElement('option');
        optionElement.value = el.value;
        optionElement.innerText = el.text;
        selectElement.append(optionElement);
    }
}

function createReminder(){
    let formElement = document.getElementById('reminder-form');
    let formData = new FormData(formElement);
    let formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    let jsonData = JSON.stringify(formDataObj);
    return fetch(`http://localhost:3000/api/reminders`, {
        method : 'POST',
        body : jsonData,
        headers : {
            "Content-Type" : 'application/json'
        }
    });
}

window.addEventListener('load', function (){
    populateYearInput(10);
    populateMonthInput();
    populateDaysOfMonthInput();
});