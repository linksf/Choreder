import React, {Component}from "react"
import {UglyThingsConsumer} from "./UglyThingsContext"

class Form2 extends Component{
    state={
        title:"",
        description: ""
    }
    handleChange=(e)=>{
        const{name, value} = e.target
        this.setState({[name]: value})
    }
    
    render(){
    return(                    
     <UglyThingsConsumer> 
    {(context)=>(
        <form>
        <input 
        name="title"
        placeholder="TITLE"
        value={this.state.title}
        onChange={this.handleChange}
        />
        <input 
        name="description"
        placeholder="DESCRIPTION"
        value={this.state.description}
        onChange={this.handleChange}
        />
        <button onClick={(e)=>{
            e.preventDefault()
        }}
        > Submit
        </button>
        </form>
    )}
    </UglyThingsConsumer> 
   
    )}
}
export default Form2