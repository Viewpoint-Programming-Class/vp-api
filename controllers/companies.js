const DB= require('./db');

module.exports = {
    create,
    get,
    getById,
    update,
    delete : _delete
}



async function get(){
    return DB.get('companies');
}

async function create(data){
    return DB.create('companies', data);
}

async function getById(id){
    return DB.getById('companies', id);
}

async function update(data){
    return DB.update('companies', data);
}

async function _delete(id){
    return DB.delete('companies', id);
}