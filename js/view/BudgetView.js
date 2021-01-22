const budgetsUL = document.querySelector('#budgets')

const renderBudget = () =>  {
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
        
    inputTranscationBudget.innerHTML = ''

    handleGetBudgets().map(budget => factoryOption(budget, budget, inputTranscationBudget))
}


