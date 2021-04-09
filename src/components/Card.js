import React, { Component } from "react";

    class Card extends Component{
        render(){
            return (
                <ul class="cards flip-card"> 
                    <li class="cards_item flip-card-inner">
                        <div className='card flip-card-front'>
                            <img src={this.props.elemento.picture} alt="" className='w-full' />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <h2>Apellido: {this.props.elemento.name.last}</h2> 
                                    <h2> Nombre: {this.props.elemento.name.first}</h2>
                                    <h3> Email: {this.props.elemento.email}</h3>
                                    <h4> Fecha de nacimiento: {this.props.elemento.dob.date} </h4>
                                    <h1>Edad: ({this.props.elemento.dob.age})</h1>  
                                </div>
                            </div>
                        </div> 
                        <div className="flip-card-back">
                            <p>Calle y número: {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}</p>
                            <p>Ciudad/Estado: {this.props.elemento.location.city}/{this.props.elemento.location.state} </p>
                            <p>País: {this.props.elemento.location.country}</p>
                            <p>Código postal: {this.props.elemento.location.postcode}</p>
                            <p>Fecha de Registro: {this.props.elemento.registered.date}</p>
                            <p>Teléfono: {this.props.elemento.phone}</p>
                        </div>
                    </li>
                </ul>           
            )
        }
    }

export default Card;