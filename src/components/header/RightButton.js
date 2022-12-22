import React from "react";
import "./RightButton.css";
import BottomHeader from "./BottomHeader";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
import {GiShoppingBag} from 'react-icons/gi';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

function RightShop({right=false,onChange}){
    const [count,setCound] = useState(0)
      const increase = ()=>{
        setCound(count+1)
        }
        const minus = ()=>{
            if (count>0)
            setCound(count-1)
        }
        


      

    return(
        <div className={`right-shop-box ${right && 'right-shop-box-true'}`}>
            <div>
                 <div style={{display: 'flex',alignItems: 'center',marginBottom:20, justifyContent: 'space-between',borderBottom: "1px solid lightgray",padding:'10px'}} >   
                 <div style={{color: 'red',display:"flex",fontWeight:'700'}}>
                    <GiShoppingBag/> <span>1 dona</span>
                    </div>
                    <AiOutlineClose style={{cursor:'pointer', fontWeight:'900', fontSize: '20',color:'lightgray'}} onClick={onChange}/>

            </div>
            <div className="right-shop-button">
                <div className="cont-button">
                    <AiOutlinePlus onClick={increase} style={{cursor:'pointer'}}/>
                    <span>{count}</span>
                    <AiOutlineMinus onClick={minus} style={{cursor:'pointer'}}/>
                </div>
            </div>
            </div>

        </div>

    )
}
export default function RightButton() {
    const [right,setRight] = useState(false)
    const changeRight=()=>{
        setRight(!right)
    }
    return(<>
        <div className="right-button-box" onClick={changeRight}>
            <div style={{display: 'flex',alignItems: 'center',marginBottom:20}} >   
                <GiShoppingBag/> <span>1 dona</span>
            </div>
            <button>5 000 000 so'm</button>
        </div>
        <RightShop right={right} onChange={changeRight} />\</>
    )
}
