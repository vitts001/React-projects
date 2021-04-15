import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import MemeGenerator from "./mem";
import Conditional from "./conditional"
import FormComponent from "./form"
import Cont from "../index"
import Calculator from "./cal";
import PersonalDiary from './persdiary'
import Slider from "./slider"

const styles = {
    color: "black",
    fontWeight: "bold"
}

const Navbar = () => {
    return (


        <div>
            <Router>
                <ul style={styles} >
                    <Switch>
                        <Link to="/"><li>Home</li></Link>x
                    </Switch>


                    <Switch>
                        <Link to="/mem"><li>Mem</li></Link>
                    </Switch>


                    <Switch>
                        <Link to="/mcq"><li>MCQ</li></Link>
                    </Switch>

                    <Switch>
                        <Link to="/calculator"><li>Calculator</li></Link>
                    </Switch>

                    <Switch>
                        <Link to="/pd"><li>PD</li></Link>
                    </Switch>

                    <Switch>
                        <Link to="/slider"><li>Slider</li></Link>
                    </Switch>

                </ul>
                <Route path="/mem">
                    <MemeGenerator />
                </Route>

                <Route path="/" exact>
                    <Conditional />
                    <FormComponent />
                </Route>

                <Route path="/mcq" exact>
                    <Cont />
                </Route>

                <Route path="/calculator" exact>
                    <Calculator />
                </Route>

                <Route path="/pd" exact>
                    <PersonalDiary />
                </Route>

                <Route path="/slider" exact>
                    <Slider/>
                </Route>

            </Router>
        </div>
    )
}

export default Navbar;