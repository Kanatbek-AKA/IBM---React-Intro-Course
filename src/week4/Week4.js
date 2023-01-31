import React from 'react';
import "./Week4.css";
import logo from "./logo4.png";
import {Link} from "react-router-dom";
import BudgetApp from "./labexc";


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
			<img className="logo4" src={logo} alt="logo" />
            	</div>
    	</div>

	<div className="main">
        <div className="App-header">
            <div className="h1">IBM Full Stack Developer Week 4</div>
            <p className="p4">Hands-on Lab: Budget Allocation Application & Final project</p>

	        </div>
	    </div>

		<div className="handson-lab">
			
			<div className="final-project">
               			<div className="lab-title">Final project: Scenario</div>
			
			<div className="final-project-title">
				Enhanced Budget Allocation Application
			</div>

			<div className="practice-lab-budget">
				<BudgetApp />
			</div>
		</div>
		<div className="end">
		<div className="thanks">AKA thanks the IBM course team for the fundamental knowledge of React.js provided on Coursera platform!</div>
		</div>	
	     </div>
       </div>
    </div>
    );
  }
}

export default App;
