let salary = Number(localStorage.getItem('salary')) || 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function save() {
    localStorage.setItem('salary', salary);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateBalance();
}

function setSalary() {
    salary = Number(document.getElementById('salary').value) || 0;
    save();
}

function updateBalance() {
    const total = transactions.reduce((a, b) => a + b.amount, 0);
    document.getElementById('balance').innerText =
        (salary - total).toLocaleString('tr-TR') + ' TL';
}

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = Number(document.getElementById('amount').value);
    const method = document.getElementById('method').value;
    const now = new Date();

    transactions.unshift({
        desc,
        amount,
        method,
        time: now.toLocaleString('tr-TR')
    });

    save();
    showTransactions('Hepsi');

    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}

function showTransactions(filter) {
    const list = document.getElementById('list');
    list.innerHTML = '';

    transactions
        .filter(t => filter === 'Hepsi' || t.method === filter)
        .forEach(t => {
            list.innerHTML += `
                <div class="transaction">
                    <b>${t.desc}</b><br>
                    ${t.amount.toLocaleString('tr-TR')} TL - ${t.method}
                    <div class="time">${t.time}</div>
                </div>
            `;
        });
}

updateBalance();
showTransactions('Hepsi');
