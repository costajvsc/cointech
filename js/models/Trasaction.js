const createTrasaction = (name, date, amount, type, category, budget) => {
    const transaction = {
        id: generateID(),
        name: name, 
        date: new Date(date),
        amount: amount,
        type: type,
        category: category,
        budget: budget
    }
    transactions.push(transaction)
}


const updateTrasaction = (id, name, date, amount, type, category, budget) => {
    transactions.map(transaction => {
        if(transaction.id === id){
            transaction.name = name
            transaction.date = new Date(date)
            transaction.amount = amount
            transaction.type = type
            transaction.category = category
            transaction.budget = budget
        }
    })
}

const removeTransaction = ID =>{
    transactions = transactions.filter(transaction => transaction.id !== ID)
}   

const getTransaction = () => {
    return transactions
}

const findTransaction = (id) => {
    let transaction = transactions.filter(transaction => transaction.id === id)
    return transaction[0]
}

