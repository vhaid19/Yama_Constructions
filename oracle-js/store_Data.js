const oracle = require('oracledb');
async function(){
    let connection;
    try {
        connection = await oracle.getConnection({
            user: ''
        })
    }
}