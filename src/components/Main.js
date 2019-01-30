import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home.js";
import Account from "./Account.js";
import Company from "./Company.js";

class Main extends React.Component {
    constructor() {
        super();
        // Here two lines are used for binding this keyword.
        this.updateAccount = this.updateAccount.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.state = {
            currentAccount: "",
            currentCompany: "",
        }
    }
    // this methos is used to update the account field value
    updateAccount(newValue) {
        let currentAccount = this.state.currentAccount;               
        this.setState({
            currentAccount: newValue.target.value
        });
    }

      // this methos is used to update the Company field value
    updateCompany(newValue) {
        let currentCompany = this.state.currentCompany;               
        this.setState({
            currentCompany: newValue.target.value
        });
    }

    componentDidMount() {
        let navId = document.getElementById('navId');
        let navigations = document.getElementById('navigations');
        navId.onclick = () => {
            navigations.classList.toggle("active");
        }
      }

  render() {

    return (
      <HashRouter>
        <div>
            <div className="logo"><i className="fa fa-circle"></i><i id="navId" className="fa fa-pencil"></i></div>
            <ul className="header" id="navigations">
                <li> <NavLink to="/"><i className="fa fa-trash"></i></NavLink> </li>
                <li> <NavLink to="/account" activeStyle={{ backgroundColor: "#267dc1" }}><i className="fa fa-child"></i></NavLink> </li>
                <li> <NavLink to="/company" activeStyle={{ backgroundColor: "#267dc1" }}><i className="fas fa-bed"></i></NavLink> </li>
            </ul>
           
            <div className="content">
                <Route exact path="/" exact strict component={Home} />
                <Route path="/account" exact strict render={() => {
                return <Account currentAccount={this.state.currentAccount} updateAccount={this.updateAccount}/>
            }} />
                <Route path="/company" exact strict render={() => {
                return <Company currentCompany={this.state.currentCompany} updateCompany={this.updateCompany}/>
            }} />
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
