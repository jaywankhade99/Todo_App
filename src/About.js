import React, { Component } from "react";

class About extends Component{
    constructor(){
        super();
        this.state={
            flag:false,
        }

    }
    showAbout() {
        this.setState({flag:true})
        console.log("flag is set")
    }
    hideAbout() {
        this.setState({flag : false});
        console.log("flag is reset");
    }

    render(){
        return(
            <>
            
            

            <button onClick={()=>this.showAbout()}>About</button>
            {this.state.flag &&
            <><>
                        <h1>My details are</h1>
                        <h2>My name is {this.props.myname}</h2>
                        <h2>I have studied in {this.props.mycollege}</h2>
                        <h2>Currently I am working in {this.props.mycompany}</h2>
                        <h2>My base location is {this.props.mylocation}</h2>
                        <h2>My age is {this.props.myage}</h2>
                    </><> <button onClick={() => this.hideAbout()}>Hide</button>
                            {this.state.flag && <></>}
                        </></>}
           </>

            
        )
    }
}
export default About;