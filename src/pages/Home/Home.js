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

                    <Grid item
                        md={6}
                        className="center">

                        <Grid item className="homeTxt">
                            <h1 className="homeMessage">For Ladies, By Ladies</h1>
                            <h2 className="homeMessage">Our bags cater to the modern working woman, and are designed to help her tackle all
                                the challenges that come her way.
                            </h2>
                        </Grid>

                        <Grid item className="homeMessage">
                            <div className="homeBtn">
                                <Link className="headerLink" to="/shop">
                                    <span className="homeBtnTxt">Shop Now</span>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
            </header>

            <section className="section">

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="center">

                    <Grid item
                        md={6}
                        className="center">

                        <Grid item className="homeMessage">
                            <h1>Feminine & Functional</h1>
                            <h2>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah Blah Blah Blah Blah.
                                Blah Blah Blah BlahBlah Blah 
                                Blah Blah Blah BlahBlah Blah. 
                            </h2>
                        </Grid>
                    </Grid>

                </Grid>

            </section>

        </div>
    )
}

export default Home;