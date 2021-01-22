const transactionsUL = document.querySelector('#transactions')

const renderTransaction = () => {
    transactionsUL.innerHTML = ''
    
    handleTransactionsMonth().map(transaction => {
        const operator = transaction.type === "Entrada" ? '+' : '-'
        const CSSClass = transaction.type === "Entrada" ? 'plus' : 'minus'
        const li = document.createElement('li')
        
        li.classList.add(CSSClass)

        li.innerHTML = `
            <span class="d-flex justify-content-between">
                <div>
                    <div>
                        <spam class="font-weight-bold">
                            ${transaction.name} 
                        </spam>
                    </div>
                    <div>
                        ${transaction.category} 
                    </div>
                    <div>
                        <small class="font-weight-light">
                            ${date2String(new Date(transaction.date))} 
                        </small>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <span class="badge badge-dark px-2">
                        <i class="fas fa-money-bill-wave"></i>    
                        ${operator} R$ ${transaction.amount.toFixed(2)}
                    </span>
                    <div class="text-center">
                        <span class="font-italic"> 
                            ${transaction.budget} 
                        </span>
                    </div>
                </div>
            </span>

            <div class="wrap-options">
                <button class="btn-option btn-delete" onClick="handleRemoveTransaction('${transaction.id}')"> 
                    <i class="far fa-trash-alt"></i>
                </button>
                <button class="btn-option btn-edit" onClick="handleFindTransaction('${transaction.id}')" data-toggle="modal" data-target="#editTransactionModal"> 
                <i class="fas fa-pen-square"></i>
                </button>
            </div>
        `
        transactionsUL.append(li)
    })
    
}



