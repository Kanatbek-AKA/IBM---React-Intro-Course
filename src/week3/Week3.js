import React from 'react';
import "./Week3.css";
import logo from "./logo3.png";
import {Link} from "react-router-dom";
//import { useDispatch } from "react-redux";


class App extends React.Component {
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
    			<img className="logo3" src={logo} alt="logo" />
            	</div>
    	</div>

	<div className="main">
        <div className="App-header">
            <div className="h1">IBM Full Stack Developer Week 3</div>
            <p className="p3">Advanced React</p>


			<div className="lab-title">Hands-on Lab React Redux</div>
			<hr />

			<div className="redux">
				<div>Here is the redux output to show. It is the same as we used state to increamentand a value by 1. So I didn't bother to implement it here.
				</div>
			</div>

	        </div>
	    </div>

       </div>
    </div>
    );
  }
}

export default App;
