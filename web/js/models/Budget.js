const createBudget = budget  => {
    budgets.push(budget)
}

const getBudget = () => budgets

const removeBudget = budget =>{
    budgets = budgets.filter(b => b !== budget)
}