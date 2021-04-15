import React from "react";



class Show_pages extends React.Component {
    

    render() {
        return (
            <div className="card" style={{ width: "18rem", float: "left", marginLeft: "2px", marginTop: "5px" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
                    <p className="card-text">{this.props.note}</p>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        )
    }
}

export default Show_pages;