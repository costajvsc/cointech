const { response } = require('express')
const transaction = require('../model/transaction')

module.exports = app => {
    
    app.get('/transactions', async (req, resp) => {
        resp.status(200).json({content: await transaction.list()})
    })

    app.get('/transactions/:id', async (req, resp) => {
        const data = req.params.id
        resp.status(200).json({content: await transaction.find(data)})
    })

    app.post('/transactions', async (req, resp) => {
        const data = req.body
        transaction.create(data) 
        .then(result => resp.status(201).json({ "message": "Transaction was create with success"}))
        .catch(errors => resp.status(400).json({ "message": "Error to create your transaction"}))
    })

    app.delete('/transactions/:id', async (req, resp) => {
        const data = req.params.id
        transaction.delete(data) 
        .then(result => resp.status(201).json({ "message": "Transaction was delete with success"}))
        .catch(errors => resp.status(400).json({ "message": "Error to delete your transaction"}))
    })

    app.put('/transactions/:id', async (req, resp) => {
        const id = req.params.id
        const data = req.body
        transaction.update(id, data) 
        .then(result => resp.status(201).json({ "message": "Transaction was update with success"}))
        .catch(errors => resp.status(400).json({ "message": "Error to update your transaction"}))
    })

}