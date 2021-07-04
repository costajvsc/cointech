const connection = require('../database/connection')
const init_database = require('../database/2021_07_03_databaseinit')

connection.connect(error => {
    if(error){
        console.log('Cannot start connection with database.')
        return
    }
    init_database.init(connection)
    console.log('Update database')      
})