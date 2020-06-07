import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";
import Boards from './components/boards';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import { FaPlusCircle} from "react-icons/fa";
import { IconContext} from "react-icons";
import DashBoard from './components/Dashboard';
import Label from "./components/labels";
import info from "./components/info";
import './App.css';

function App() {
  return (
    <Router>
    <div  >
  <div className="sidenav">
  <DashBoard/>
  </div>
    <div className="main">
    <Navbar />
   
    <br/>
   <div className="container">
<Route path ="/" exact component ={ExercisesList}/>
<Route path ="/edit/:id" component={EditExercise}/>
<Route path ="/create"  component={CreateTask}/>
<Route path ="/user" component={CreateUser}/>
<Route path ="/boards" component={Boards}/>
<Route path="/labels/:label" component={Label}/>
<Route path="/info" component={info}/>

</div>
</div>
</div>
 </Router>

  );
}

export default App;
