import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Products from "../../components/Products";
import Cart from '../../components/Cart/Cart'



const Home = (props) => {
    return (
        <div>
            <Cart
                checkout={props.checkout}
                isCartOpen={props.isCartOpen}
                handleCartClose={props.handleCartClose}
                updateQuantityInCart={props.updateQuantityInCart}
                removeLineItemInCart={props.removeLineItemInCart}
            />
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
                            <h1 className="homeMessage">Pretty enough for a lunch date. </h1>
                            <h1 className="homeMessage"> Practical enough for a board meeting.</h1>
                            <h2 className="homeMessage">
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
                            <h1>Practical, Professional, Feminine.</h1>
                            <h2>Our bags cater to the modern working woman, and are designed to help her tackle all
                                the challenges that come her way.</h2>
                        </Grid>
                    </Grid>

                </Grid>

            </section>

        </div>
    )
}

export default Home;