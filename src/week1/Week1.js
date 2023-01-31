import React from 'react';
import "./Week1.css";
import axios from 'axios';
import logo from "./logo.png";
import {Link} from "react-router-dom";


class App extends React.Component {
  constructor(props, date) {
    super(props);
    this.date = new Date();
  }

  state = { counter:0, APIlist:[] }
  incrementCounter = ()=> {
    	this.setState({counter:this.state.counter +1});
  }
  decrementCounter = () => {
	this.setState({counter:this.state.counter -1});
}
  // Load External data in a table 
   componentDidMount() {
	    let url = "https://api.publicapis.org/entries?category=Animals";
	    axios({
	      method: 'get',
	      url: url,
	      responseType: 'json'
	    }).then(resp => {
	        let listOfEntries = resp.data.entries;
	        let listOfEntriesAsArray = Object.entries(listOfEntries);
 		//console.log(listOfEntriesAsArray);
	        let entryDetials = listOfEntriesAsArray.map((entryDetail)=>{
	          return <tr><td>{entryDetail[1]["API"]} </td>
	          <td> {entryDetail[1]["Link"]} </td>
	          </tr>
	        })
	        this.setState({APIlist:<table><tbody>{entryDetials}</tbody></table>})
	      })
	    .catch(err => {
	        console.log(err.toString())
	    });
	  }

  render() {
    const colorStyle = {color:this.props.color, fontSize:this.props.size+"px"}

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
    			<img className="logo1" src={logo} alt="logo" />
            	</div>
    	</div>

	<div className="main">
        <div className="App-header">
            <div className="h1">IBM Full Stack Developer Week 1</div>
            <p className="p1">Building Rich Front-End Application with React and ES6</p>

	        </div>
	    </div>

    	<div className="exercise1">
    	 <div style={colorStyle}>
           	 React Component -- click
            	<br /><br />
            	<button className="btn1"  onClick={this.incrementCounter}>Increment Me</button><br /> <br />
		<button className="btn1" onClick={this.decrementCounter}>Decrement Me</button>
            	<br /><br />
		
            	{this.state.counter}
		
             </div>
    	</div>

    	<div className="exercise_table1">
    	  <div className="h2">Class Components - componentDidMount</div>
    		<div style={colorStyle}>
    	        <div className="h2">APIs List</div>
    	        <br/>
    	        <div className="api_table">
    	            {
    	            this.state.APIlist
    	            }
    	        </div>
    	      </div>
    	   </div>
	</div>
        
       </div>

    );
  }
}

export default App;
