import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assests/commerce.png";
import useStyles from './styles';
const Navbar = ({ totalItems }) => {
    const classes=useStyles();
    return (
        <>
           <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                   <Typography variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="E-Commerce" height="25px" className={classes.image} />
                        E-Commerce
                   </Typography>
                   <div className={classes.grow}>
                   <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                   </div>
                   </div> 
                </Toolbar>
           </AppBar> 
        </>
    )
}

export default Navbar
