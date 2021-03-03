import React, {Component}from "react"
import {UglyThingsConsumer} from "./UglyThingsContext"

class Form extends Component{
    //if you're using state you need to define a constructor function and call super() this is what creates ties the "this" of the class to the parent - which in this case is React.Component. When you define state without the "this", it just acts like a normal javascript variable without the bells and whistles (like this.setState and instant updating of child elemnts). The constructor also also allows props to be passed in.
    constructor(props){
        super()
        this.state = {
            title:"",
            imgUrl:"",
            description: ""
        }
    }
    handleChange=(e)=>{
        const{name, value} = e.target
        this.setState({[name]: value}) 
    }
    
    render(){
    return(                    
     <UglyThingsConsumer> 
    {(context)=>(
         //moved the submit function to the form instead of the buttom and added a state reset to clear out the form
        <form onSubmit={(e)=>{
            e.preventDefault()
            context.submission(this.state)
            this.setState({
                title:"",
                imgUrl:"",
                description: ""
            })
            console.log(this.initState)
        }}>
            {    //HIGHLY recoment using lables for input fields and reserve placeholders for examples. Not only do placeholders dissapear when you type (so people might forget what goes into that field), they are also not read by screen readers, so someone with a visual imparment woudln't be abnle to use the site
            }
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
        <input
        name="imgUrl"
        placeholder="IMAGE URL"
        value={this.state.imgUrl}
        onChange={this.handleChange}
        />
        <button type="submit"> Submit</button>
        {/* put request </button> */}
        {/* Need to add this info to state now (UglyThings component). And get request written in UglyThings, and then  in EachItems*/}
    </form>
    )}
    </UglyThingsConsumer> 
   
    )}
}
export default Form