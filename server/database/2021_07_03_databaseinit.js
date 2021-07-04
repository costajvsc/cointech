class DatabaseInit { 
    
    init(connection){ 
        this._connection = connection 
        this.createDatabase() 
        this.createTableTransactions() 
    } 
    
    createDatabase(){ 
        const sql = 'CREATE DATABASE IF NOT EXISTS `cointech` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;' 
        this._connection.query(sql, (error) =>{ 
            if(error) 
                console.log(error) 
            else 
                console.log('Database cointech was created')
        }) 
    } 

    createTableTransactions(){ 
        const sql = `CREATE TABLE IF NOT EXISTS Transactions(
                        id_transaction INT NOT NULL AUTO_INCREMENT,
                        title VARCHAR(50) NOT NULL,
                        amount DECIMAL(9, 2) NOT NULL,
                        date DATETIME NOT NULL, 
                        type VARCHAR(30),
                        category VARCHAR(30),
                        payment VARCHAR(30),
                        status VARCHAR(20), 
                        note VARCHAR(100), 
                        create_at DATETIME NOT NULL, 
                        update_at DATETIME, 
                        PRIMARY KEY(id_transaction)
                    );` 

        this._connection.query(sql, (error) =>{ 
            if(error) 
                console.log(error) 
            else 
                console.log('Table transactions was created') 
        }) 
    } 
} 
module.exports = new DatabaseInit