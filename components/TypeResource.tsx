export type IItemProp = {
    date: string
    amount: string
    category: string
    comments: string
    _id_income: string
}

export type EItemProp = {
    date: string
    amount: string
    category: string
    comments: string
    _id_expense: string
}

export type itemProp = {
    _id: string
    user: string
    incomes: IItemProp[]
    expenses: EItemProp[]
}

export type MItemProp = {
    date: string
    amount: string
    category: string
    comments: string
    id: string
}