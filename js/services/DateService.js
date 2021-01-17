const formatUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const date2String = date => `${formatUnit(date.getDate())}/${formatUnit(date.getMonth() + 1)}/${date.getFullYear()}`

const string2Date = date => `${formatUnit(date.getDate())}/${formatUnit(date.getMonth() + 1)}/${date.getFullYear()}`

const date2StrigHTMLFormat = date => `${date.getFullYear()}-${formatUnit(date.getMonth() + 1)}-${formatUnit(date.getDate())}`