import React from 'react';

class Model extends React.Component {
    state ={
        classes: "model-container",
        clickedTime: ""
    }

    render(){

        console.log(this.props.time);
        var biggest = this.props.item["j"]["sizes"]["size"].length-1;
        if(this.state.clickedTime != this.props.time){
            this.state.classes = "model-container";
            this.state.clickedTime = this.props.time;
        }

        return (
            <div className={this.state.classes}>
                <div onClick={this.BtnClose} className="closecontainer">&times;</div>
                <div className="imgcontainer">
                    <img className="imgAuto" src={this.props.item["j"]["sizes"]["size"][biggest]["source"]} alt=""/>
                </div>
                <div className="imgcaption">{this.props.item["p"]["title"]}</div>
                {console.log(this.props.item)}
            </div>
        )
    }

    BtnClose = () => {
        this.setState({classes: "model-container hideItem"})
    }
}

export default Model;

//<img src={this.props.item[""]} alt=""/>