const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

const previousMonthDisplay = document.querySelector('[data-js=data-month-previous]')
const currentMonthDisplay = document.querySelector('[data-js=data-month-current]')
const nextMonthDisplay = document.querySelector('[data-js=data-month-next]')
const settingsMonthDisplay = document.querySelector('[data-js=data-month-settings]')

const renderMonthsDisplay = () => {
    previousMonthDisplay.innerHTML = previousMonth
    currentMonthDisplay.innerHTML = currentMonth
    nextMonthDisplay.innerHTML = nextMonth
}

const renderBalance = (filterTransactions) => {
    const transactionAmounts = filterTransactions
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