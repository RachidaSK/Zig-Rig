import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./NavBar.css"

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  
    render() {
      return (
        <nav id="nav-bar">
        <img id="miniLogo" src="/images/zrLogo1.png" alt="Zig-Rig Logo" />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Your Account
        <span class="caret"></span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem ><a href="">About</a></DropdownItem>
            <DropdownItem><a href="/myprojects">My Projects</a></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><a href="/signin">Logout</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </nav>
      );
    }
  }