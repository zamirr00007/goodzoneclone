import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CaruselBrands.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const CardBrand = ()=>{
  return(
    <>
  <div className='card-brand'>
        <img src="https://cdn.goodzone.uz/goodzone/3ce7d2ba-f19f-49fd-8ce5-f1de69e5c719" alt="" />

    </div>
    </>
    )
}
const CardBrands = ()=>{
  return(
    <div className='q'>
      <img src="https://cdn.goodzone.uz/goodzone/2c1ad3c3-3a70-41c9-b826-bdd604c03d10" alt="" width={100} />
      </div>      
  )
  
}

export default function CaruselBrands() {
  return (
    <div>
        <Carousel arrows={false} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={0} customTransition={'transform 3000ms ease-in-out'}>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>
         <CardBrand/>
         <CardBrands/>

        </Carousel>;
    </div>
  )
}
