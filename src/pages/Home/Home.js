import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <div>
            <header className="header">
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="center">

                    <Grid container
                        md={6}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className="center">

                        <Grid item className="homeMessage">
                            <h1 className="homeTxt">For Ladies, By Ladies (JK this was made by a dude.)</h1>
                        </Grid>

                        <Grid item>
                            <div className="homeBtn">
                                <Link className="headerLink" to="/shop">
                                    <span className="homeBtnTxt">Shop Now</span>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
            </header>
        </div>
    )
}

export default Home;