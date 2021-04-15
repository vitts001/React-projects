import React from "react";
import Show_pages from "./pd_saved";

const ip_style = {
    width: "30%",
    marginTop: "70px",
    padding: "10px",
    height: "40px",
    borderRadius: "10px",

    borderType: "None"
}

const div = {
    textAlign: "center"
}

const textar = {
    width: "50%",
    height: "200px",

}



class PersonalDiary extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "",
            date: "",
            note: "",
            pd_data: ""
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
        event.preventDefault();
        if (this.state.date == "" || this.state.note == "" || this.state.title == "") {
            alert("please fill all the fields")
        }
        else {
            let myobj = {
                title1: this.state.title,
                date1: this.state.date,
                note: this.state.note
            }

            let pd_data = localStorage.getItem("pd_data")
            pd_data = pd_data ? JSON.parse(pd_data.split(",")) : []
            pd_data.push(myobj)
            localStorage.setItem("pd_data", JSON.stringify(pd_data))
            this.setState({ pd_data: JSON.parse(localStorage.getItem("pd_data")) })

        }

    }

    componentDidMount() {
        this.setState({ pd_data: JSON.parse(localStorage.getItem("pd_data")) })
    }


    render() {
        const comps = []
        if (this.state.pd_data !== null) {
            for (let i = 0; i < this.state.pd_data.length; i++) {
                comps.push(<Show_pages title={this.state.pd_data[i].title1} date={this.state.pd_data[i].date1} note={this.state.pd_data[i].note} />)

            }
        }
        else {
            alert("nothing here")
        }
        return (
            <div style={div} >
                <h1>Notes Maker</h1>
                <form onSubmit={this.HandleSubmit}>
                    <input onChange={this.HandleChange} value={this.state.title} name="title" style={ip_style} type="text" placeholder="Title" /><br /><br />
                    <label htmlFor="">Date: </label><input onChange={this.HandleChange} value={this.state.date} name="date" type="date" /><br /><br />
                    <label style={{ fontSize: "20px" }} htmlFor="">Today's Note :-</label><br /><br />
                    <textarea title="Add your notes here" onChange={this.HandleChange} value={this.state.note} className="textera" name="note" id="" style={textar}></textarea><br /><br />
                    <button className="btn btn-success">Write</button><br />
                </form>
                {comps}

            </div>
        )
    }
}

export default PersonalDiary;