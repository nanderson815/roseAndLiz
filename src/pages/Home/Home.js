import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const Home = (props) => {
    return (
        <div>
            <header className="header">
                <Grid container className="center">
                    <Grid item className="homeGrid">
                        <div className="homeBtn" variant="outlined" size="large"><span className="homeBtnTxt">Shop Now</span></div>
                    </Grid>
                </Grid>
            </header>
        </div>
    )
}

export default Home;