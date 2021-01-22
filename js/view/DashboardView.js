const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

const renderBalance = () => {
    const transactionAmounts = handleTransactionsMonth()
        .map(
            transaction => transaction.type === 'Entrada' 
            ? parseFloat(`${transaction.amount}`) 
            : parseFloat(`-${transaction.amount}`)
        ) 
        
    const total = transactionAmounts
        .reduce((acc, transaction) => acc += transaction, 0.0)
        .toFixed(2)
    
    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => acc + transaction, 0.0)
        .toFixed(2)
    
    const expense = Math.abs(
        transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => acc + transaction, 0.0)
    ).toFixed(2)
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}