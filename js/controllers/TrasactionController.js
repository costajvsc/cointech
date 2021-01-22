const formAdd = document.querySelector('#form')
const inputTranscationName = document.querySelector('#text')
const inputTranscationAmount = document.querySelector('#amount')
const inputTranscationDate = document.querySelector('#date')
const inputTranscationType = document.querySelector('#type')
const inputTranscationCategory = document.querySelector('#category')


const formEdit = document.querySelector('#form-edit')
const inputTranscationIdEdit = document.querySelector('#transaction-id')
const inputTranscationNameEdit = document.querySelector('#text-edit')
const inputTranscationAmountEdit = document.querySelector('#amount-edit')
const inputTranscationDateEdit = document.querySelector('#date-edit')
const inputTranscationTypeEdit = document.querySelector('#type-edit')
const inputTranscationCategoryEdit = document.querySelector('#category-edit')



const handleFormAddTransaction   = event => {
    event.preventDefault()

    const name = inputTranscationName.value
    const date = inputTranscationDate.value
    const amount = parseFloat(inputTranscationAmount.value)
    const type = inputTranscationType.value
    const category  = inputTranscationCategory.value
    const budget = inputTranscationBudget.value
    
    clearFormTrasaction()

    const message = `A Trasação <strong>${name}</strong> foi inserida com sucesso.`

    createTrasaction(name, date, amount, type, category, budget)
    
    updateDatabase('transactions', transactions)
    
    sendAlert('success', message)
    render()
}

const handleRemoveTransaction = id => {
    removeTransaction(id)
    updateDatabase('transactions', transactions)

    const message = `A Trasação foi removida com sucesso.`

    sendAlert('danger', message)
    render()
} 

const handleFindTransaction = id => {
    let transaction = findTransaction(id)
    
    inputTranscationIdEdit.value = id 
    inputTranscationNameEdit.value = transaction.name
    inputTranscationDateEdit.value =  date2StrigHTMLFormat(new Date(transaction.date))
    inputTranscationAmountEdit.value = parseFloat( transaction.amount)
}

const handleFormEditTransaction = event => {
    event.preventDefault()

    const id = inputTranscationIdEdit.value
    const name = inputTranscationNameEdit.value
    const date = inputTranscationDateEdit.value
    const amount = parseFloat(inputTranscationAmountEdit.value)
    const type = inputTranscationTypeEdit.value
    const category  = inputTranscationCategoryEdit.value
    const budget = inputTranscationBudgetEdit.value
    
    clearFormTrasaction()

    const message = `A Trasação <strong>${name}</strong> foi atualizada com sucesso.`

    updateTrasaction(id, name, date, amount, type, category, budget)
    updateDatabase('transactions', transactions)
    sendAlert('warming', message)
    render()
}

const handleTransactionsMonth = () => filterTransaction('budget', 'Dezembro (2020)')

const clearFormTrasaction = () => {
    inputTranscationName.value = ''
    inputTranscationAmount.value = ''
    inputTranscationIdEdit.value = ''
    inputTranscationNameEdit.value = ''
    inputTranscationAmountEdit.value = ''

}

formAdd.addEventListener('submit', handleFormAddTransaction)
formEdit.addEventListener('submit', handleFormEditTransaction)
