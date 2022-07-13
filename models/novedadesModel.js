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

async function deleteNovedadById(id){
    var query = 'delete from novedades where id= ?';
    var rows = await pool.query(query,[id]);
    return rows;

}

module.exports = { getNovedades, insertNovedades , deleteNovedadById }