import React from 'react'
import "./card.css";
import b1 from "../../../../assets/breakfast(4).jpg";

function card() 
{
    return (
        <div className='card my-3 mr-3'>
            <div className='red_tag'>
                BEST offers
            </div>
            <span>
                <i class="far fa-check-square mr-1"></i>
                <pre>card comp</pre>
            </span>
            
            <div className='card-img-div'>
                <img src={b1}/>
            </div>

            <p className='dish_name'>Masala-Omelette</p>
            <p className='price'>₹89</p>
            <button>ADD</button>
        </div>
    )
}

export default card
