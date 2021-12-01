import React, {useState} from 'react'

function FoodBox(props) {
    const {foodie, addClick} = props
    const [qty, setQty] = useState(0)

    function handleQty(event) { 
        setQty(event.target.value)  //this keeps track of input for every individual item
    }

    return (
        
        <div>       
          
        <div className="box">        
            <article className="media">                
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={foodie.image}/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{foodie.name}</strong> <br />
                    <small>{foodie.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input value={qty} onChange={handleQty} className="input" type="number"  />
                    </div>
                    <div className="control">                   
                    <button  onClick={() => {addClick(foodie, qty)}} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        </div>
    )
}

export default FoodBox
