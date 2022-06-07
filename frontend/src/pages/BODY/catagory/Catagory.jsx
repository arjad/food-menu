import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./catagory.css";

class Catagory extends Component 
{
    

    render() {
        return (
        <>
            <div className="catagory-div container">
            <div className='row'>
                <div className='col'>CATAGORIES</div>
                <div className='veg-price-div col-3'>
                    <button>VEG</button>
                    <button>
                        PRICE 
                        <i className="fas fa-bars ml-2"></i>
                    </button>
                    <div className='filter-div'>
                        <i class="fas fa-filter"></i>
                        <p>FILTERS</p>
                    </div>
                </div>

            </div>
            </div>
            <div className='sale-div container-fluid'>
                Use Code FMFIFTY and Get 50% Off
            </div>
        </>);
    }
}
export default Catagory;