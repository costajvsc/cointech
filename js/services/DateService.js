const formatUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const date2String = date => `${formatUnit(date.getDate())}/${formatUnit(date.getMonth() + 1)}/${date.getFullYear()}`

const string2Date = date => `${formatUnit(date.getDate())}/${formatUnit(date.getMonth() + 1)}/${date.getFullYear()}`

const date2StrigHTMLFormat = date => `${date.getFullYear()}-${formatUnit(date.getMonth() + 1)}-${formatUnit(date.getDate())}`

const month = new Date().getMonth() + 1
const year = new Date().getFullYear()

const months = {
    '0': 'Dezembro',
    '1': 'Janeiro',
    '2': 'Fevereiro',
    '3': 'Março',
    '4': 'Abril',
    '5': 'Maio',
    '6': 'Junho',
    '7': 'Julho',
    '9': 'Agosto',
    '9': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
    '13': 'Janeiro',
}

const previousMonth = month - 1 == 0 ? `${months[month - 1]} (${year - 1})` : `${months[month - 1]} (${year})`
const currentMonth = `${months[month]} (${year})`
const nextMonth =  month + 1 == 13 ? `${months[month + 1]} (${year + 1})` : `${months[month + 1]} (${year})`

