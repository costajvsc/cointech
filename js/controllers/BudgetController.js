const formBudget = document.querySelector('#form-budget')
const spanBudgetAdd = document.querySelector('#add-new-budget')
const inputTranscationBudgetAdd = document.querySelector('#budget-add')
const inputTranscationBudget = document.querySelector('#budget')
const inputTranscationBudgetEdit = document.querySelector('#budget-edit')



const handleFormBudget = event => {
    event.preventDefault()

    const budgetName = inputTranscationBudgetAdd.value
    inputTranscationBudgetAdd.value = ''

    createBudget(budgetName)
    
    const message = `O orçamento <strong>${budgetName}</strong> foi inserido com sucesso.`

    updateDatabase('budgets', budgets)
    sendAlert('success', message)
    render()
}   

const handleRemoveBudget = (budget) => {
    removeBudget(budget)
    
    const message = `O orçamento <strong>${budget}</strong> foi removido com sucesso.`
    
    updateDatabase('budgets', budgets)
    sendAlert('danger', message)
    render()
}

const handleGetBudgets = () => getBudget()

handleGetBudgets()

formBudget.addEventListener('submit', handleFormBudget)
spanBudgetAdd.addEventListener('click', renderBudget)