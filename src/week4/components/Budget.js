import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const {currency, budget, dispatch, expenses } = useContext(AppContext);
	
	const changeBudget = (value) => {
		const totalExpenses = expenses.reduce((total, value) => {
			return (total += value.cost);
		}, 0);

		if(value < totalExpenses) {
			alert("You cannot reduce the budget value lower than spending!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: value,
			})
			}
	}

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}</span><input type="number" step="1000"  value={budget} onInput={(event)=>changeBudget(event.target.value)} style={{width:"90px"}}/>
		</div>
	);
};

export default Budget;
