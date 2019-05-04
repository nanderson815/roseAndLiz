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

import './Navbar.css';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    blue: {
        backgroundColor: "white",
        color: "black"
    }
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar className={classes.blue} position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <p className="headerLogo">Rose & Liz</p>
                    </Typography>
                    <Link to="/shop"> <Button color="inherit">Shop</Button></Link>
                    <Link to="/"><Button color="inherit">Home</Button></Link>
                    <IconButton color="inherit"> <ShoppingCartOutlined /> </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
