var pool = require('./bd');

async function getNovedades(){
    var query = 'select * from novedades order by id DESC';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
    try{

        var query = 'insert into novedades set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades }