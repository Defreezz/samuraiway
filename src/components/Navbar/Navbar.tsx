import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css"
import {v1} from "uuid";

type NavbarItemDataType = {
    id:string
    name:string
    path:string
}

const navbarItemData:NavbarItemDataType[] = [
    {id:v1(), name: "My Profile", path: "/myprofile"},
    {id:v1(),name: "Messages", path: "/dialogs"},
    {id:v1(),name:"Users", path:"/users"},
]
type NavbarItemType = {
    linkTO: string
    names: string
}


function NavbarItem (props:NavbarItemType){
    return(
    <div className={style.item}>
        {/*navData проверяет есть ли class active  у блока*/}
        <NavLink
            to={props.linkTO}
            className={(navData) => navData.isActive ? style.activeLink : ''}>
            {props.names}
        </NavLink>
    </div>)}

const navbarElement = navbarItemData.map((n,index) =>
    <NavbarItem key={index} linkTO={n.path} names={n.name}/>)

function Navbar() {
    return (
        <nav className={style.nav}>
            {navbarElement}
        </nav>
    )
}

export default Navbar