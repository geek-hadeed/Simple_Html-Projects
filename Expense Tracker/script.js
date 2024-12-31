let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const expenseForm = document.querySelector('.expense-form');
const expenseTable = document.getElementById('expenseTableBody');
const totalExpenseElement = document.getElementById('totalExpense');

function renderExpenses() {
    expenseTable.innerHTML = '';
    let totalExpense = 0;

    expenses.forEach((expense, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td><button class="delete-btn" data-id="${index}">Delete</button></td>
        `;
        expenseTable.appendChild(tr);
        totalExpense += expense.amount;
    });

    totalExpenseElement.textContent = totalExpense.toFixed(2);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense(event) {
    event.preventDefault();

    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;

    if (name && amount && category) {
        expenses.push({ name, amount, category });
        renderExpenses();
        expenseForm.reset();
    } else {
        alert('Please fill in all fields');
    }
}

function deleteExpense(event) {
    if (event.target.classList.contains('delete-btn')) {
        const index = parseInt(event.target.getAttribute('data-id'));
        expenses.splice(index, 1);
        renderExpenses();
    }
}

document.getElementById('addExpense').addEventListener('click', addExpense);
expenseTable.addEventListener('click', deleteExpense);

renderExpenses();

