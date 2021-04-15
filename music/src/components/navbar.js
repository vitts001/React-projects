import React from "react";
import Data from "./data"
import ShowSong from "./Show_songs"

export default class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            search_ip: "",
            data: Data
        }
        this.HandleInput = this.HandleInput.bind(this)
    }


    HandleInput(event) {
        this.setState({ search_ip: event.target.value })
    }



    render() {

        let matches = this.state.data.filter(ob => ob.name.toLowerCase().includes(this.state.search_ip.toLowerCase()))
        let comps = matches.map(ob => <ShowSong name={ob.name} img_src={ob.img_src} />)

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ borderRadius: "40px", marginBottom: "10px" }}>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li className="nav-item">
                                <a href="#" className="nav-link" style={{ color: "brown", fontWeight: "bold", fontSize: "30px" }}>Listen and feel</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input onChange={this.HandleInput} value={this.state.search_ip} class=" ip form-control mr-sm-2" type="search" placeholder="song or singer name" aria-label="Search" style={{ width: "300px", borderRadius: "30px" }} />

                        </form>
                    </div>
                </nav>
                {comps}
            </div>
        )
    }
}