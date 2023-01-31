 import React from 'react';
import "./Week2.css";
import logo from "./logo2.png";
import {Link} from "react-router-dom";
import ReactHook from "./react_hook/ReactHook";

class App extends React.Component  {
   constructor(props, date) {
	super(props);
	this.date = new Date();
    }

   render() {

    return (
	<div className="App-body">
	      <div className="boo">
	    	<div className="foo">
	    	        <div className="nav-main">
	            	    <nav className="navigator">
				<Link to="/" className="link">Home</Link>
	                         <Link to="/week1" className="link">Week1</Link>
	                        <Link to="/week2" className="link">Week2</Link>
	                        <Link to="/week3" className="link">Week3</Link>
	                        <Link to="/week4" className="link">Week4</Link>
	                	    </nav>
	    			<div className="dateTime">
	    			   Date: {this.date.toLocaleDateString()} {this.date.toLocaleTimeString()}
	    			</div>
	    			<img className="logo2" src={logo} alt="logo" />
	            	</div>
	    	</div>

		<div className="main">
	        <div className="App-header">
	            <div className="h1">IBM Full Stack Developer Week 2</div>
	            <p className="p2">React Components</p>

		        </div>
		    </div>

		<div className="todoList">
		        <div className="h2">Todo List</div>
		      <form className="form">
		        <input className="form_input"
		            type="text"
		            placeholder="React Hook doesn't work in class component! Ask IBM staffs for solution :)"/>
		        <button className="btn_td"></button>
			</form>
			<div className="embeded-form">
			      <ReactHook />
			</div>
			<div className="reactHook">Or you can access this <a href="http://localhost:3000/reacthook" rel="noopener noreferrer" target="_blank" className="reactH">Web Application</a> to see React Hook in action inside a function</div>
		</div>


       </div>
    </div>
    );
  }
}


export default App;
