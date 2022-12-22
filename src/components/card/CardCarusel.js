import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import './CardCarusel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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

let data = [
    {
        id:1,
        name:"Planshet Xiaomi Pad 5 6/256GB White",    
        price:"200000 so'm",
        img:"https://cdn.goodzone.uz/goodzone/ece40479-0723-4639-9800-cd1644a84585"
    },
    {
        id:2,
        name:"iPhone 13 pro max",    
        price:"17000000 so'm",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7DrnPQVwUTk0i8uxNP5BkxLM7mn0WREEuA&usqp=CAU"
    },
    {
        id:3,
        name:"iPhone 14 pro max",    
        price:"25000000 so'm",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxv5ibUJcACMoJMgFYA3StSVwHaZ5kE23LUA&usqp=CAU"
    }
]
const data2 = [
  {
    id:1,
    img:"https://cdn.goodzone.uz/goodzone/f249f0aa-1c3a-4cb0-acb6-304a3af9eb83"
  },
  {
    id:2,
    img:"https://cdn.goodzone.uz/goodzone/6473a94b-88ea-46b6-80ce-d6ed06fc5195"
  },
  {
    id:3,
    img:"https://cdn.goodzone.uz/goodzone/6a323497-906e-497f-8617-7cc5a50b82f5"
  },
  {
    id:4,
    img:"https://cdn.goodzone.uz/goodzone/06dc3dc6-b991-4456-885e-b3a22372d47e"
  },
  {
    id:5,
    img:"https://cdn.goodzone.uz/goodzone/1198572e-6ddb-40b8-9c31-8a7dca6ae2a3"
  },

]

function CardImage({img}){
  return  <img src={img} height={90} width={220} style={{margin:20,borderRadius:10,marginLeft:35}} alt=""/>

}


function CardCarusel(){
  
    return(
      <>
        <div className="card-carusel-goodzone">
            <Carousel responsive={responsive}>
                {data.map(item=>{
                    return (

                       <Card name={item.name} img={item.img} price={item.price}/>  
                    )
                })}
               
             </Carousel>
           </div> 
           <div>
            <h2>Mashhur kategoriyalar</h2>
            </div> 
           <div>
            {data2.map(item=>{
              return <CardImage img={item.img}/>
            })}
            
           </div>


             </>
        
    )
}

export default CardCarusel