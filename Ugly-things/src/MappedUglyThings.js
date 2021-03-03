import React from "react"
import {UglyThingsConsumer} from "./UglyThingsContext.js"
import Thing from "./Thing"
//You are passing only the _id to the edit function you have in context, but the put call that you'll make needs both the _id as well as the changes that you want to make.

function MappedUglyThings(){
   
    return (
        <UglyThingsConsumer>
            {
            ({uglythings, deleteB, editB}) => {

                console.log(uglythings)

                // const uglyThingsList = uglythings.map(uglything => { 
                //     return (
                //         <div key={uglything._id}>
                //             <h1>{uglything.title}</h1>
                //             <img src={`${uglything.imgUrl}`} />
                //             <h1>{uglything.description}</h1>
                //             <button onClick ={() =>editB({_id: uglything._id, title: uglything.title, imgUrl: uglything.imgUrl, description: uglything.description})}>Edit</button> 
                //             <button onClick ={()=>deleteB(uglything._id)}> Delete</button>
                //         </div>
                //     )
                // })
                
                //return uglyThingsList
                const uglyThingsList = uglythings.map(uglything => <Thing key={uglything._id} data={uglything} />
            
                )}}   
        </UglyThingsConsumer>
    )
}
export default MappedUglyThings
