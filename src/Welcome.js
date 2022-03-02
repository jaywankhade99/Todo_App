import React, { Component } from "react";
import About from "./About";

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Jay",
            about:{
                college: "ssgmce",
                company: "Atos",
                location:"mumbai",
                age:23,
            }

        }
    }
        
    render(){
        return(
            <>
            <h1>Welcome {this.state.name}</h1>
            <About
            myname={this.state.name}
            mycollege={this.state.about.college}
            mycompany={this.state.about.company}
            myage={this.state.about.age}
            mylocation={this.state.about.location}

            />
            {/* /* <button onClick={()=>this.showAbout()}>About</button>
            {this.state.flag &&<> <h1>My details are</h1>
            <h2>My name is {this.state.name}</h2>
            <h2>I have studied in {this.state.about.college}</h2>
            <h2>Currently I am working in {this.state.about.company}</h2>
            <h2>My base location is{this.state.about.location}</h2>
            <h2>My age is {this.state.about.age}</h2>
            </>} */}

            {/* <button onClick={()=>this.hideAbout()}>Hide</button>
           {this.state.flag && <></>}
            </> */}
        </>
        )
    }
    
    
}
export default Welcome