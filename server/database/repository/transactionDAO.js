const queryFactory = require('../queryFactory')

class TransactionDAO {
    create(transaction){
        const sql = 'INSERT INTO transactions SET ?'
        return queryFactory(sql, transaction)
    }

    update(id, transaction){
        const sql = 'UPDATE transactions SET ? WHERE id_transaction = ?'
        return queryFactory(sql, [transaction, id])
    }

    list(){
        const sql = 'SELECT * FROM transactions'
        return queryFactory(sql)
    }

    find(id){
        const sql = 'SELECT * FROM transactions WHERE id_transaction = ?'
        return queryFactory(sql, id)
    }

    delete(id){
        const sql = 'DELETE FROM transactions WHERE id_transaction = ?'
        return queryFactory(sql, id)
    }
}

module.exports = new TransactionDAO()