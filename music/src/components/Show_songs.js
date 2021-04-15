import React from "react";

export default class ShowSong extends React.Component {

    state = {
        play: false,
        ico: "fa fa-play"
    }

    Playy = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
        if (this.state.ico === "fa fa-play") {
            this.setState({ ico: "fa fa-pause" })
        }
        else {
            this.setState({ ico: "fa fa-play" })
        }
    }

    Pausee = () => {
        this.setState({ play: false, ico: "fa fa-play" })
        this.audio.pause()
    }

    audio = new Audio(`ekdo.mp3`)


    render() {
        return (
            <div className="song_div">

                <img src={this.props.img_src} alt="" />
                <button onClick={this.Playy} className="btn1" style={{ width: "30px", height: "30px", borderRadius: "40px" }}><i className={this.state.ico}></i></button>
                <h4>{this.props.name}</h4>
                <button onClick={this.Pausee} className="btn2" style={{ width: "30px", height: "30px", borderRadius: "40px" }}><i className="fa fa-step-forward"></i></button>

            </div>
        )
    }
}