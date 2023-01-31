import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

//	/*const {currency, budget, dispatch, expenses } = useContext(AppContext);

//        const changeRemaining = (value) => {
//                const totalExpenses = expenses.reduce((total, value) => {
//                        return (total -= value.cost);
//                }, 0);
//                if(value < totalExpenses) {
//                        alert("Remaining value cannot exceed the budget value!");
//                } else {
//                        dispatch({
//                                type: 'SET_BUDGET',
//                                payload: value,
//                        })
//                        }
//        }/*

	const { expenses, budget, currency } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);
	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: {currency}{budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;
