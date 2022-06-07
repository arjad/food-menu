import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
  { width: 2560, itemsToShow: 5 },

];

export default function Slider() 
{
  return (
    <Carousel 
      className="slider" showEmptySlots={false} focusOnSelect={true} 
      breakPoints={breakPoints} pagination={false}
      enableMouseSwipe={true} enableAutoPlay={true}>
        
      <Item className="deals d1"></Item>
      <Item className="deals d2"></Item>
      <Item className="deals d3"></Item>
      <Item className="deals d4"></Item>
      <Item className="deals d5"></Item>
      <Item className="deals d6"></Item>
      <Item className="deals d7"></Item>
      <Item className="deals d8"></Item>
    </Carousel>
  );
}
