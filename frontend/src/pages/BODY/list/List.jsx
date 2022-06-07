import React, { Component } from 'react';
import "./list.css"

class List extends Component  
{
    constructor(props) 
    {
        super(props);
        window.addEventListener('scroll', this.handleScroll, true);
    }
      
    handleScroll = (event) =>  
    { 
        let b = window.scrollY;
      // console.log("scroll in pixel = " , b )

      if(b > 304 && b < 1785)
      {
          document.getElementsByClassName("li1")[0].classList.add("highlight");
      //     console.log("all break fast")
          
      }
      else{
            document.getElementsByClassName("li1")[0].classList.remove("highlight");

      }
      if(b > 1786 && b < 2988)
      {
            document.getElementsByClassName("li2")[0].classList.add("highlight");
            // console.log("sandwitch")
      }   
      else{
            document.getElementsByClassName("li2")[0].classList.remove("highlight");

      }
      if(b > 2988 && b < 4190)
      {
            document.getElementsByClassName("li3")[0].classList.add("highlight");
            // console.log("burger and wrap")
      }   
      else{
            document.getElementsByClassName("li3")[0].classList.remove("highlight");

      }
      if(b > 4191 && b < 5393)
      {
            document.getElementsByClassName("li4")[0].classList.add("highlight");
            // console.log("fresh deserts")
      }
      else{
            document.getElementsByClassName("li4")[0].classList.remove("highlight");
      }   
      if(b > 5393 && b <  6595)
      {
            document.getElementsByClassName("li5")[0].classList.add("highlight");
          
      //     console.log("rice bowls")
      }   
      else{
        document.getElementsByClassName("li5")[0].classList.remove("highlight");

      }
      if(b > 6594 && b < 7798)
      {
            document.getElementsByClassName("li6")[0].classList.add("highlight");
          
      //     console.log("noodle bowls")
      }   
      else{
            document.getElementsByClassName("li6")[0].classList.remove("highlight");

      }
      if(b > 7799 && b < 8999)
      {
            document.getElementsByClassName("li7")[0].classList.add("highlight");
          
      //     console.log("pasta ands streaks")
      }   
      else{
        document.getElementsByClassName("li7")[0].classList.remove("highlight");

      }
      if(b > 9000 && b < 10202)
      {
            document.getElementsByClassName("li8")[0].classList.add("highlight");
      //     console.log("paltters")
      }   
      else{
        document.getElementsByClassName("li8")[0].classList.remove("highlight");

      }
      if(b > 10203 && b < 11073)
      {
            document.getElementsByClassName("li9")[0].classList.add("highlight");
            // console.log("bireyani and thails")
      }
      else{
            document.getElementsByClassName("li9")[0].classList.remove("highlight");

      }
      if(b > 11073 && b < 11944)
      {
            document.getElementsByClassName("li10")[0].classList.add("highlight");
          
            // console.log("fit n fab")
      }   
      else{
            document.getElementsByClassName("li10")[0].classList.remove("highlight");

      }
      if(b > 11943 && b < 12942)
      {
            document.getElementsByClassName("li11")[0].classList.add("highlight");
            // console.log("bkito specials")
      }
      else{
        document.getElementsByClassName("li11")[0].classList.remove("highlight");

      }
    }

    render(){
    return (
    <div className='col-2 p-0'>
    <ul className='list-div  '>
    
        <li><a className='li1' href="#all_day_breakfast">All day Breakfast</a></li>
        <li><a className='li2' href="#sandwitches">Sandwitches</a></li>
        <li><a className='li3' href="#burger&wraps">Burger & wraps</a></li>
        <li><a className='li4' href="#freshdeserts">Fresh Deserts</a></li>
        <li><a className='li5' href="#ricebowls">Rice Bowls</a></li>
        <li><a className='li6' href="#noodlebowls">Noodle Bowls</a></li>
        <li><a className='li7' href="#pasta&streaks">Pasta & Streaks</a></li>
        <li><a className='li8' href="#platters">Platters</a></li>
        <li><a className='li9' href="#biryani&thails">Biryani & Thails</a></li>
        <li><a className='li10' href="#fitnfabs">Fit N Fabs</a></li>
        <li><a className='li11' href="#kitospecials">Kito Specials</a></li>
    </ul>
    </div>
    )
    }
}

export default List
