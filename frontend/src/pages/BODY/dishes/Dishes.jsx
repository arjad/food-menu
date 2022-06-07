import React, { useEffect, useState } from 'react'
import "./dishes.css";
import Card from "./card/card";
import "./card/card.css";
import b1 from "../../../assets/breakfast(4).jpg";
import {mycontext} from "../../../App";

function Dishes() 
{
    useEffect(() => {
        if (performance.navigation.type === 1) {
          console.log("This page is reloaded");
        //   dispData();
        } else {
          console.log("This page is not reloaded");
        }
      });

    return (
    <div className='dishes-div col-10 pl-4 pr-0'>
        
        <div className='sections'>
            <h2 id='all_day_breakfast'>All Day Breakfast</h2>
            <div className='d-flex flex-wrap pr-0 border'>
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
      
            </div>
        </div>
        <div className='sections'>
            <h2 id='sandwitches'>Sandwitches</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='burger&wraps'>Burger & Wraps</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='freshdeserts'>Fresh Deserts</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
       
        <div className='sections'>
            <h2 id='ricebowls'>Rice Bowls</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='noodlebowls'>Noodle Bowls</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='pasta&streaks'>Pasta & Streaks</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='platters'>Platters</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='biryani&thails'>Biryani& Thails</h2>
            <div className='d-flex flex-wrap pr-0'>
              <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='fitnfabs'>Fit N Fabs</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card /> <Card /> <Card />
            </div>
        </div>
        <div className='sections'>
            <h2 id='kitospecials'>Kito Specials</h2>
            <div className='d-flex flex-wrap pr-0'>
               <Card />  <Card /> <Card />  <Card />
            </div>
        </div>
    </div>
    )
}

export default Dishes
