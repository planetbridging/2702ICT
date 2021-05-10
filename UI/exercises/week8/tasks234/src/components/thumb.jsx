import React from 'react';
import * as flickr from "./flickr";
import Model from './model';

class Thumb extends React.Component {

    state = {
        pictures: [],
        loading: true,
        selected: null,
    }

    componentDidMount(){
        /*const fetchInterest = async() =>{
            var link = flickr.getInterest();
            var data = await flickr.dynamic_link(link);
            console.log(data);
        }
        fetchInterest();*/
        this.loadInterest();
    }

    render(){
        const isLoading = this.state.loading;
        return (
            <div>

            {(() => {
                    if (isLoading) {
                    return (
                        <div>Loading images</div>
                    )
                    } else {
                    return (
                        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>IMG</th>
              </tr>
            </thead>
            <tbody id="RandomPhoto">

                     {
                        this.state.pictures.map((item,index)=>{
                            return (
                            <tr onClick={() => this.showModel(item)} key={index}>
                                <td>{item["p"]["id"]}</td>
                                <td>{item["p"]["title"]}</td>
                                <td><img src={item["t"]["source"]} width="75" height="75" /></td>
                            </tr>)
                        })
                    }

                </tbody>
          </table>
                    )
                    }
            })()}
            
           {this.renderModel()}
          </div>
        );
    }

    loadInterest = async() => {
        var link = flickr.getInterest();
        var data = await flickr.dynamic_link(link);
        //console.log(data);
        var lstphotos = await flickr.getInterestLst(data);
        this.setState({pictures: lstphotos,loading: false})
    }

    showModel = (item) => {
        //<Model item={item} />
        console.log(item);
        this.setState({selected: item});
    }

    renderModel = () =>{
        console.log("poo");
        if(this.state.selected == null){
            return;
        }else{
            return <Model item={this.state.selected} time={Date.now()}/>
        }
    }
}

export default Thumb;