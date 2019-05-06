import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import { Link } from "react-router-dom";
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';

import './Navbar.css';


const styles = {
    color: {
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none"
    },
    scrolled: {
        backgroundColor: "#58646D",
        transition:"background-color 0.35s ease", 
        color: "white",
    }
};


function NavBar(props) {
    const { classes } = props;


    let navbarClass = ''
    if (props.isTop){
        navbarClass = classes.color
    } else {
        navbarClass = classes.scrolled
    }

    return (
        <div>
            <AppBar className={`${navbarClass} navBar`} position="fixed">
                <Toolbar>
                    <Grid className="center"
                        justify="space-between"
                        container
                        spacing={24}
                    >
                        <Grid item>
                            <Link className="headerLink" to="/shop" onClick={props.close}>
                                <Button size="large" color="inherit"><span className="headerBtn">Shop</span></Button>
                            </Link>
                            <Link className="headerLink" to="/about" onClick={props.close}>
                                <Button size="large" color="inherit"><span className="headerBtn">About</span></Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Typography variant="h6" color="inherit">
                                <p className="headerLogo">Rose & Liz</p>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Link className="headerLink" to="/" onClick={props.close}>
                                <Button size="large" color="inherit"><span className="headerBtn">Home</span></Button>
                            </Link>
                            <IconButton color="inherit" onClick={props.click}> <ShoppingCartOutlined /> </IconButton>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div >
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
