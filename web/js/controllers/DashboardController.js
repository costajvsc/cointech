previousMonthDisplay.addEventListener('click', () => {
    setFilterState(previousMonth)
    renderTransaction()
})

currentMonthDisplay.addEventListener('click', () => {
    setFilterState(currentMonth)
    renderTransaction()
})

nextMonthDisplay.addEventListener('click', () => {
    setFilterState(nextMonth)
    renderTransaction()
})

settingsMonthDisplay.addEventListener('click', () => {
    sendAlert('warning', 'settings month were clicked')
})

