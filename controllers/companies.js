const DB= require('./db');

module.exports = {
    create,
    get,
    getById,
    update,
    delete : _delete
}



async function get(){
    return DB.get('reminders');
}

async function create(data){
    return DB.create('reminders', data);
}

async function getById(id){
    return DB.getById('reminders', id);
}

async function update(data){
    return DB.update('reminders', data);
}

async function _delete(id){
    return DB.delete('reminders', id);
}