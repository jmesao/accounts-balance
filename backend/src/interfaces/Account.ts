export interface Account {
  id: number,
  account_name: string,
  category: string,
  tags: string,
  balance: number,
  available_balance: number
}

export interface AccountDetails {
  id: number,
  confirmed_date: string,
  order_id: string,
  order_code: string,
  transaction_type: string,
  debit: number,
  credit: number,
  balance: number
}
