const budgetsUL = document.querySelector('#budgets')

const renderListBudget = () =>  {
    budgetsUL.innerHTML = ''

    handleGetBudgets().map(budget => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div class="d-flex justify-content-between">
            <div>
                ${budget}
            </div>
            <button type="button" class="btn btn-danger p-1" onClick="handleRemoveBudget('${budget}')"> 
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
        ` 
        li.classList.add('list-group-item')
        budgetsUL.appendChild(li)
    })
}

const renderBudgetOptions = () => {
    
    inputTranscationBudget.innerHTML = ''
    inputTranscationBudgetEdit.innerHTML = ''

    handleGetBudgets().map(budget => factoryOption(budget, budget, inputTranscationBudget))
    handleGetBudgets().map(budget => factoryOption(budget, budget, inputTranscationBudgetEdit))

    factoryOption(previousMonth, previousMonth, inputTranscationBudget)
    factoryOption(currentMonth, currentMonth, inputTranscationBudget)
    factoryOption(nextMonth, nextMonth, inputTranscationBudget)

    factoryOption(previousMonth, previousMonth, inputTranscationBudgetEdit)
    factoryOption(currentMonth, currentMonth, inputTranscationBudgetEdit)
    factoryOption(nextMonth, nextMonth, inputTranscationBudgetEdit)

}

const renderBudgets = () => {
    renderListBudget()
    renderBudgetOptions()
}
