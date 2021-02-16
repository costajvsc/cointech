let transactions = getStorage("transactions")
let budgets = getStorage("budgets")

const updateDatabase = (storage, value) => {
    setStorage(storage, value)
}