import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SlidersInput from "./make_slide_card"
import SliderComp from "./slidercomp"


const styles = {
    marginLeft: "300px",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
}

class Slider extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Link className="link" style={styles} to="/makecard">makeCard</Link>
                    </Switch>
                    <Switch>
                        <Link className="link" style={styles} to="/slider1">Slider</Link>
                    </Switch>
                    <Route path="/makecard">
                        <SlidersInput />
                    </Route>
                    <Route path="/slider1" exact>
                        <SliderComp />
                    </Route>
                </Router>

            </div >
        )
    }
}

export default Slider;