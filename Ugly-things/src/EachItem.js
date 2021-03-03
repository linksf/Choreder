import React from "react"
import ConsumerUglyThings from "./UglyThingsContext.js"

function EachItem(){
    return (
        <ConsumerUglyThings>
            {({uglythings}) => ( 
                <img src={uglythings.imgUrl} alt="Error" />
                )
            }   
        </ConsumerUglyThings>
    )

}


export default EachItem 