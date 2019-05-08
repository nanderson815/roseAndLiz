import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
    root: {
        width: '100%',
        minHeight: "200px",
        backgroundColor: "#f1f2f3"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function NavbarPanel(props) {
    const { classes } = props;
    return (
        <Collapse in={props.isOpen} >
            <div className={classes.root}>

            </div>
        </Collapse>
    );
}

NavbarPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarPanel);
