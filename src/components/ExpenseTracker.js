import React, { useState, useEffect } from 'react';

export function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [newExpense, setNewExpense] = useState('');

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(savedExpenses);
    }, []);

    const addExpense = () => {
        if (newExpense.trim() !== '') {
            const updatedExpenses = [...expenses, newExpense];
            setExpenses(updatedExpenses);
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            setNewExpense('');
        }
    };

    return (
        <div>
            <h2>Expense Tracker</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newExpense}
                    onChange={(e) => setNewExpense(e.target.value)}
                    placeholder="Enter expense"
                />
                <button onClick={addExpense}>Add Expense</button>
            </div>
        </div>
    );
}
