const FSDB = require("file-system-db");
const db = new FSDB();

module.exports = {
    create,
    update,
    delete : _delete,
    get,
    getById
}


async function fetchData(type){
    return db.get(type);
}

async function saveData(type, data){
    return db.set(type, data);
}

async function get(type){
    let data = await fetchData(type);
    return (data || []).filter(x => x);
}

async function getById(type, _id){
    let data = await get(type);
    return data.find(({id}) => id == _id);
}

async function create(type, obj){
    let data = await get(type);
    obj.id = data.length + 1;
    data.push(obj);
    await saveData(type, data);
    return obj;
}


async function update(type, obj){
    let data = await get(type);
    let index = data.findIndex(({id}) => id == obj.id);
    if(index == -1) return null;
    data[index] = obj;
    await saveData(type, data);
    return obj;
}


async function _delete(type, _id){
    let data = await get(type);
    let index = data.findIndex(({id}) => id == _id);
    if(index == -1) return null;
    data[index] = null;
    await saveData(type, data);
    return data;
}