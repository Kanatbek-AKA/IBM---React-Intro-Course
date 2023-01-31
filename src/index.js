import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import {BrowserRouter} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Week1 from './week1/Week1';
import Week2 from './week2/Week2';
import ReactHook from './week2/react_hook/ReactHook';
import Week3 from './week3/Week3';
import Week4 from './week4/Week4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	 <React.StrictMode>
		<BrowserRouter> 
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/week1" element={<Week1 />} />
			<Route path="/week2" element={<Week2 />} />}
			<Route path="/reacthook" element={<ReactHook />} />}
			<Route path="/week3" element={<Week3 />} />
			<Route path="/week4" element={<Week4 />} />
		</Routes>
		</BrowserRouter>
	 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
