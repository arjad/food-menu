import React from 'react'
import "./footer2.css";

function footer2() 
{
    return (
        <div className='footer-cont container-fluid'>
        <div className=' container'>
        <div className='foot2 row py-4'>
            <ul className='col-2 col-sm-4'>
                <li><b>CATEGORIES</b></li>
                <br/>
                <li>Mains</li>
                <li>Pizzas</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
    
            <div className='col-3 col-sm-4'>
                
                <b>CUISINES</b>
                <div className='two-col'>
                <ul>
                    <li>Indian</li>
                    <li>Chinese</li>
                    <li>Italian</li>
                    <li>American</li>
                </ul>

                <ul>
                    <li>Mexican</li>
                    <li>Thai</li>
                    <li>Continental</li>
                    <li>Mediterriean</li>
                </ul>
                </div>
            </div>    
    
        </div>
        </div>
        
    
        </div>
    )
}

export default footer2;