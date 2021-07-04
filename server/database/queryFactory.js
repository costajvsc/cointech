const connection = require('./connection')

const queryFactory = (query, params = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (errors, result, fields) => {
            if(!errors)
                return resolve(result)
            reject(errors)
        })
    })
}

module.exports = queryFactory