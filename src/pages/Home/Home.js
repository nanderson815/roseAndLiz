import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <div>
            <header className="header">
                <Grid container className="center">

                    <Grid item xs={12} sm={6} md={4} className="homeGrid">
                        <h1 className="homeTxt">Filler Text Goes Here</h1>

                        <div className="homeBtn">
                            <Link className="headerLink" to="/shop">
                                <span className="homeBtnTxt">Shop Now</span>
                            </Link>
                        </div>

                    </Grid>

                </Grid>
            </header>
        </div>
    )
}

export default Home;