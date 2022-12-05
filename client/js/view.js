async function populateTable(){
    let reminders = await getRemindersFromServer();
    let tbody = document.getElementById('reminders-table');
    let htmlText = ``;
    for(let reminder of reminders){
        htmlText += `<tr>
        <td>${reminder.hDate}</td>
        <td>${reminder.date}</td>
        <td>${reminder.title}</td>
        <td>${reminder.reminder}</td>
        </tr>`
    }

    tbody.innerHTML = htmlText;
}


async function getRemindersFromServer(){
    let response = await fetch('/api/reminders', {
        method : 'GET'
    });
    return response.json();
}

window.addEventListener('load', function(){
    populateTable();
    console.log('Hi from add event callback function');
});

console.log('Hi from js document');