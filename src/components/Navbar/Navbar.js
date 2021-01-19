import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assests/commerce.png";
import useStyles from './styles';
const Navbar = ({ totalUniqueItems }) => {
    const classes=useStyles();
    const location = useLocation();
    return (
        <>
           <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                   <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="E-Commerce" height="25px" className={classes.image} />
                        E-Commerce
                   </Typography>
                   <div className={classes.grow} />
                   {location.pathname ==='/' && (
                   <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalUniqueItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                   
                   </div> )}
                </Toolbar>
           </AppBar> 
        </>
    )
}

export default Navbar
