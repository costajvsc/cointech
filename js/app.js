const init = () =>{
    setFilterState(currentMonth)
    renderMonthsDisplay()
    renderListBudget()
    renderBudgetOptions()
    renderBalance(getFilterTransactions())
    renderTransaction(getFilterTransactions())
}

init()




