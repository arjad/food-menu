import React from 'react'
import Catagory from './catagory/Catagory'
import "./body.css";
import List from "./list/List";
import Dishes from "./dishes/Dishes";
import Nav from "../../pages/common/nav/nav";
import Nav2 from '../../pages/common/nav2/nav2';
import Slider from '../../pages/BODY/sliders/slider';
import Footer from "../../pages/common/footer/footer";
import Footer2 from "../../pages/common/footer2/footer2";

function Body() 
{
    return (<>
        <Nav/>
        <Nav2/>
        <Slider/>

         <div className='container-fluid '>
            <Catagory/>
            <br/>
            <div className='container'>
            <div className='row'>
                <List/>
                <Dishes/>
            </div>
            </div>

        </div> 
        <Footer/>
        <Footer2 /> 
    </>
    )
}

export default Body
