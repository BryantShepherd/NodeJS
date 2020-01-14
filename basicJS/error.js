function getConnection(callback){
    var connection;
    try {
        throw new Error('failed');
        callback(null, connection);
    } catch(error){
        callback(error, null);
    }
}

getConnection((error, connection) => {
    if (error){
        console.log('Error:', error.message);
    } else {
        console.log('Connection succeeded', connection);
    }
})