import React from 'react'
import {useState} from 'react'

function Total(props) {

    const {totalData} = props

    const total = totalData.reduce((sum, elem) => {
        return sum + (elem.quantity*elem.calories)
    },0)

    return (
        <div>
            <h1>Bring out the calories!</h1>
            {
                totalData.map((elem) => {
                    const {quantity, name, calories} = elem
                    return (
                        
                            <ul>
                               {quantity} {name} = {calories*quantity}`
                            </ul>
                        
                    )
                })
            }
             <h1>Your total colories are: {total}</h1>   
        </div>
    )
}

export default Total
