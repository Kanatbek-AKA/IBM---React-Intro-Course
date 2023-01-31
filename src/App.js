import './App.css';
import logo from "./test6.png";
import kun from "./front-end-development-with-react.png";
import {Link} from "react-router-dom";

function App() {
   const date = new Date(); 
  
  return (
    <div className="App-body">
      <div className="boo">

	<div className="foo">
	        <div className="nav-main">
        	    <nav className="navigator">
			<Link to="/week1" className="link">Week1</Link>
			<Link to="/week2" className="link">Week2</Link>
			<Link to="/week3" className="link">Week3</Link>
			<Link to="/week4" className="link">Week4</Link>
            	    </nav>
			<div className="dateTime">
			   Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}
			</div>
			<img className="logoMain" src={logo} alt="logo" />
        	</div>
	</div>

	<div className="main">
            <div className="App-header">
                <div className="h1">IBM Full Stack Developer course 4</div>
                <p className="p0">Welcome to Developing Front-End apps with React.js</p>
                <img src={kun} alt="badge" className="badgeMain" />
            </div>

          <div className="footer">
           <div className="react"> &copy; <strong>Note:</strong> This webpage was created by practicing the React.js while I learned the WebDev.</div>
          </div>


	</div>
    	</div>
    </div>
  );
}

export default App;

