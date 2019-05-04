import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';


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
            <AppBar className={classes.blue} position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Rose & Liz
          </Typography>
                    <Button color="inherit"> <Link to="/shop">Shop</Link></Button>
                    <Button color="inherit"> <Link to="/">Home</Link></Button>
                    <Button color="inherit"> <ShoppingCartOutlined /> </Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
