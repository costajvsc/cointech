const formBudget = document.querySelector('#form-budget')
const spanBudgetAdd = document.querySelector('#add-new-budget')
const inputTranscationBudgetAdd = document.querySelector('#budget-add')
const inputTranscationBudget = document.querySelector('#budget')
const inputTranscationBudgetEdit = document.querySelector('#budget-edit')

let budgets = getStorage("budgets")

const handleFormBudget = event => {
    event.preventDefault()

    const budgetName = inputTranscationBudgetAdd.value
    inputTranscationBudgetAdd.value = ''

    createBudget(budgetName)
    
    const message = `O orçamento <strong>${budgetName}</strong> foi inserido com sucesso.`

    setStorage('budgets', budgets)
    sendAlert('success', message)
    render()
}   

const handleRemoveBudget = (budget) => {
    removeBudget(budget)
    
    const message = `O orçamento <strong>${budget}</strong> foi removido com sucesso.`
    
    setStorage('budgets', budgets)
    sendAlert('danger', message)
    render()
}

formBudget.addEventListener('submit', handleFormBudget)
spanBudgetAdd.addEventListener('click', renderBudget)