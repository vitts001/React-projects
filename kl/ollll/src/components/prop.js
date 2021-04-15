import React from 'react';


const styles = {

    color: "green"
}





class Images extends React.Component {



    render() {
        return (
            <div>

                <h4 style={styles}><strong>Question:{this.props.keyy}</strong> {this.props.question}</h4><br />
                <input onChange={() => this.props.Handlechange(this.props.option1)} type="radio" name="option" />
                <label htmlFor="option1">{this.props.option1}</label>
                <input onChange={() => this.props.Handlechange(this.props.option2)} type="radio" name="option" />
                <label htmlFor="option2">{this.props.option2}</label>
                <input onChange={() => this.props.Handlechange(this.props.option3)} type="radio" name="option" />
                <label htmlFor="option1">{this.props.option3}</label>
                <input onChange={() => this.props.Handlechange(this.props.option4)} type="radio" name="option" />
                <label htmlFor="option1">{this.props.option4}</label>
                <button className="btn btn-success" style={{ float: "right" }} type="submit" onClick={() => this.props.Handleclick(this.props.keyy)}>Submit</button>
                <hr />

            </div>
        )
    }
}

export default Images;



