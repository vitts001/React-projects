import React from "react";

class MemeGenerator extends React.Component {

    constructor() {
        super()
        this.state = {
            toptext: "",
            bottomtext: "",
            randmems: "http://i.imgflip.com/1bij.jpg",
            allmems: []
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
    }

    HandleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    HandleSubmit(event) {
        event.preventDefault()
        const randImg = Math.floor(Math.random() * this.state.allmems.length)
        const randImage = this.state.allmems[randImg].url
        this.setState({ randmems: randImage })


    }

    componentDidMount() {

        fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => {
            const { memes } = response.data
            this.setState({ allmems: memes })
        })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "white" }}>Meme Generator:</h1><br />
                <form onSubmit={this.HandleSubmit}>
                    <input onChange={this.HandleChange} type="text" name="toptext" value={this.state.toptext} placeholder="toptext" />
                    <input onChange={this.HandleChange} type="text" name="bottomtext" value={this.state.bottomtext} placeholder="bottomtext" /><br /><br />
                    <button className="btn btn-success">Gen</button><br /><br />
                </form>
                <div style={{ width: "400px", position: "absolute", height: "200px", marginLeft: "350px" }}>
                    <h1 style={{ position: "absolute", top: "2px", display: "block", textAlign: "center", color: "blue" }}>{this.state.toptext}</h1>
                    <img style={{ width: "400px", height: "200px", borderRadius: "15px" }} src={this.state.randmems} alt="mem" />
                    <h1 style={{ position: "absolute", bottom: "2px",color:"blue" }}>{this.state.bottomtext}</h1>
                </div>
                <br /><br />
            </div>
        )
    }

}

export default MemeGenerator;