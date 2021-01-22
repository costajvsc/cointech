const getStorage = (key) => {
    const storage = localStorage.getItem(key)
    return storage !== null ? JSON.parse(storage) : []
}

const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}