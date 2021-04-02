import React from 'react'

    function Card(props){
        return (
            <ul class="cards"> 
            <li class="cards_item">
        <div className='card'>
            <img src={props.elemento.picture} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h2>Apellido: {props.elemento.name.last}</h2> 
                    <h2> Nombre: {props.elemento.name.first}</h2>
                    <h3> Email: {props.elemento.email}</h3>
                    <h4> Fecha de nacimiento: {props.elemento.dob.date} </h4>
                    <h1>Edad: ({props.elemento.dob.age})</h1> 
                    <button class="btn btn--block card__btn">Ver más</button>
                    
                </div>
                </div>
            </div> 


            </li>
        </ul>           
        )
    }

export default Card;