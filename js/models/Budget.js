const createBudget = budget  => {
    budgets.push(budget)
}

const removeBudget = budget =>{
    budgets = budgets.filter(b => b !== budget)
}