const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err)=>{
    console.error(err);
});

module.exports = {
    //ambil seluruh data barang
    getDataBarang(req,res){
        pool.getConnection(function(err,connection){
            if (err) throw err;
            connection.query(
                'SELECT * FROM tbbarang',
                function(error, results){
                    if (error) throw error;
                    res.send({
                        success: true,
                        message : 'Berhasil ambil data',
                        data: results,
                    });
                }
            );
            connection.release();
        })
    },
}