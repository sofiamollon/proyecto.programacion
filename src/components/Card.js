import React from 'react'

    function Card(props){
        return (
            <ul class="cards flip-card"> 
                <li class="cards_item flip-card-inner">
                    <div className='card flip-card-front'>
                        <img src={props.elemento.picture} alt="" className='w-full' />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <h2>Apellido: {props.elemento.name.last}</h2> 
                                <h2> Nombre: {props.elemento.name.first}</h2>
                                <h3> Email: {props.elemento.email}</h3>
                                <h4> Fecha de nacimiento: {props.elemento.dob.date} </h4>
                                <h1>Edad: ({props.elemento.dob.age})</h1>  
                            </div>
                        </div>
                    </div> 
                    <div className="flip-card-back">
                        <p>Calle y número: {props.elemento.location.street.name} N˚{props.elemento.location.street.number}</p>
                        <p>Ciudad/Estado: {props.elemento.location.city}/{props.elemento.location.state} </p>
                        <p>País: {props.elemento.location.country}</p>
                        <p>Código postal: {props.elemento.location.postcode}</p>
                        <p>Fecha de Registro: {props.elemento.registered.date}</p>
                        <p>Teléfono: {props.elemento.phone}</p>
                    </div>
                </li>
            </ul>           
        )
    }

export default Card;