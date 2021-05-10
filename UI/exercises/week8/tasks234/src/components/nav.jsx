import React from 'react';

class Nav extends React.Component {

    state = {
        menu: ["Puppy","Nature","Sports"],
        input: ""
    }

    render(){
        return (
            <div className="Nav">
                <ul>
                    {
                        this.state.menu.map((item,index)=>{
                            return (<li key={index}><a href="#">{item}</a></li>)
                        })
                    }
                </ul>
                <input id="TxtSearch" type="text" name="search" onChange={this.ChangeTxtSearch}/><br />
                <button onClick={this.BtnSearch}>Search</button>
            </div>
        )
    }

    BtnSearch = () => {
        this.setState({menu: this.state.menu.concat(this.state.input)})
    }

    ChangeTxtSearch = (event) =>{
        this.setState({input: event.target.value})
    }

}

export default Nav;