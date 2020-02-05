import React from 'react'
import  '../../Style.css'

export default function Block(props){
    return (
        <a href= "https://market.yandex.ru/">
        <div className="line">
            <img src={props.imgUrl} alt={props.title} className="picSize"/>
            <h3>{props.price} ₽</h3>
            <p className="color">{props.name}</p>
        </div>
        </a>
    )
}