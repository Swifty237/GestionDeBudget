
export type IncomeProp = {
    date: string
    amount: string
    category: string
    comments: string
    _id_income: string
}

export type ExpenseProp = {
    date: string
    amount: string
    category: string
    comments: string
    _id_expense: string
}

export type ItemProp = {
    _id: string
    user: string
    incomes: IncomeProp[]
    expenses: ExpenseProp[]
}

export type OperationProp = {
    date: string
    amount: string
    category: string
    comments: string
    _id_income?: string,
    _id_expense?: string
}

export type MergedOperationProp = {
    date: string
    amount: string
    category: string
    comments: string
    id: string
}