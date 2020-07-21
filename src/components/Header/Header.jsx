import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className={classes.header}>
            <NavLink to={'/'} className={classes.headerItem}>Main</NavLink>
            <NavLink to={'/employees'} className={classes.headerItem}>Employees</NavLink>
        </header>
    )
}
