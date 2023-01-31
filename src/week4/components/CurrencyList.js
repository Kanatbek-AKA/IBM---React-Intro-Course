import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const [ currency, setCurrency ] = useState('');
    const { dispatch, } = useContext(AppContext);
  
    const updateCurrency = (event) => {
    
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
    }
    return (
        <div className='alert alert-secondary' style={{background:"none", border:"none", marginBottom:"-20px"}}> 
        <span>
          <select 
            className='btn btn-success dropdown-toggle'
            id='currency'
            onChange={ (event) => updateCurrency(event) } style={{marginTop:"-15px", background:"lightgreen", height:"53px", width:"200px", color:"darkblue", fontWeight:"bold"}} >Currency {currency}
              <option defaultValue value={currency}>Currency {currency}</option>
              <option value='¥'>¥ Chinese Yuan</option>
              <option value='$'>$ Dollar</option>
              <option value='€'>€ Euro</option>
              <option value='с'>с Kyrgyz SOM</option>
              <option value='₽'>₽ Pound</option>
              <option value='¥'>¥ Japanese Yen</option>
              <option value='₺'>₺ Turkish Lira</option>
              <option value='₹'>₹ Indian Rupee</option>
              <option value='₩'>₩ WON</option>
              <option value='₪'>₪ Israeli Shekel</option>
          </select>
          </span>
        </div>
	);
};

export default CurrencyList;
