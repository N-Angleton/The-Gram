import React from "react";

export class Header extends React.Component{


    render(){
        return (
            <header className="header">
                <h1 className="logo">the gram</h1>
                <input className="searchBar" type="text"/>
                <ul className="headerIcons">
                </ul>
            </header>
        )
    }
}