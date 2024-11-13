import axios from 'axios'

const BACKEND_URL = 'https://react-native-course-47e53-default-rtdb.firebaseio.com'


export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(
    BACKEND_URL + '/expenses.json'
  )
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    }
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(expense_id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${expense_id}.json`, expenseData); //object with amount, date and description
}

export function deleteExpense(expense_id) {
  return axios.delete(BACKEND_URL + `/expenses/${expense_id}.json`);
}