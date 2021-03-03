import React, {Component} from 'react'
import {UglyThingsConsumer} from './UglyThingsContext'
class Thing extends Component{
    //you'll be passing in an object with _id, title, imgUrl, and description as the keys. This will come from the uglyThingsList array 
    constructor(props){
        super()
        this.state = {
            editMode: false,
            //key/value for name, description, and url - initiated from props
            temporaryDescription: props.data.description
        }
        
    }
    
    render(){
        const {title, description, imgUrl, _id} = this.props.data
        return (
            <UglyThingsConsumer>
            {
                ({deleteB, editB}) => {
                    <div className="thing-wrapper">
                        <h1>{title}</h1>
                        <img src={`${imgUrl}`} />
                        <h1>{description}</h1>
                        <button onClick ={() =>editB(this.state)}>Edit</button> 
                        <button onClick ={()=>deleteB(_id)}> Delete</button>
                        {this.state.editMode ? <div className="thing-edit-modal"></div> : null}
                    </div>
                }
            
    }
        </UglyThingsConsumer>
        )
    }
}

export default Thing

/*
lets look at the process ror the ui functionality

delete button:
    1. user clicks button
    2. button calls deleteb method from context, passing in the _id
    3. deleteb method calls axios.delete with the _id to remove it from the database
    4. deleteb updates the ugly things list to remove the thing, which updates the DOM

edit button:
    1. user clicks button
    2. button toggles on "edit mode" in the Thing's state
    3. toggle mode triggers the edit form to get added to the DOM, pre-populated with the Thing's current name, description, and url
    4. user makes edits and clicks save button (which was created along with the edit form)
    5a. save button calls editb method on the context, passing in the _id as well as the edited name, description, and url
    5b. save button (or cancel button if user changed thier mind about editing) toggles off edit mode and removes the edit form from the DOM
    6. editb calls axios.put to the url + _id and passes an opject with the new info
    7. edit then updates uglythingslist to reflect the change

*/