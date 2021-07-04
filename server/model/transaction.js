const repository = require('../database/repository/transactionDAO')

class Transaction { 
    list(){
        return repository.list()
    }

    find(id){
        return repository.find(id)
    }

    create(transaction){
        // validate
        // any thing else
        // return a response
        return repository.create(transaction)
    }

    update(id, transaction){
        // validate
        // any thing else
        // return a response
        return repository.update(id, transaction)
    }

    delete(id){
        return repository.delete(id)
    }
}

module.exports = new Transaction()