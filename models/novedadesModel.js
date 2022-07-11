var pool = require('./bd');

async function getNovedades(){
    var query = 'select * from novedades order by id DESC';
    var rows = await pool.query(query);
    return rows;
}


module.exports = { getNovedades }