import React from "react";
import {Link} from 'react-scroll'
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#333"
  }
  return (
    <header>
      <nav>
        <NavLink to ="/" end style={({isActive})=> isActive?activeStyle:null} >Home</NavLink>|{""}
        <NavLink to ="about" style={({isActive})=> isActive?activeStyle:null}>About</NavLink>|{""}
        <NavLink to="projects" style={({isActive})=> isActive?activeStyle:null}>Projects</NavLink>|{""}
        <NavLink to="contact" style={({isActive})=> isActive?activeStyle:null}>Contact</NavLink>
      </nav>
    </header>
  );
}
