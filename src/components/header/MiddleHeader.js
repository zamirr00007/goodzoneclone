import "./MiddleHeader.css"
import { useState,eseEffect } from "react"
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaBalanceScaleLeft} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
function MiddleHeader(){
     const [nav,setNav] = useState(false)
    const onChangeBack=()=>{
        if(window.scrollY>66){
            setNav(true)


        }
        else {
            setNav(false)
        }

    }
    useState(()=>{
        onChangeBack()
        window.addEventListener("scroll",onChangeBack)
    })
    return (
        <div className={`middle-header-cont ${nav && 'middle-header-sticky'}`}>
            <img src="https://goodzone.uz/logogz_ru.svg" alt=""></img>
            <div className="middle-header-search">
                <input type="text" placeholder="Mahsulot bo'yicha qidirish" />
            <button><AiOutlineSearch/></button>
            </div>
            <div className="middle-header-icons">
                <div>
                <AiOutlineHeart style={{fontSize:24}}/>
                <span>Sevimlilar</span>
            </div>
            <div>
                <FaBalanceScaleLeft style={{fontSize:24}}/>
                <span>Solishtirish</span>
            </div>
            <div>
                <AiOutlineShoppingCart style={{fontSize:24}}/>
                <span>Savatcha</span>
            </div>
            <div>
                <AiOutlineUser style={{fontSize:24}}/>
                <span>Kirish</span>
            </div>
            </div>
            

        </div>
    )
}


export default MiddleHeader