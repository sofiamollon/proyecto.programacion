import React, { Component } from "react";

    class Card extends Component{

        render(){

            return (
                <React.Fragment>  
                <ul className="cards flip-card"> 
                    <li className=" flip-card-inner">
                        <div className='card flip-card-front' >     
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <h2> Apellido: {this.props.elemento.name.last}</h2> 
                                    <h2> Nombre: {this.props.elemento.name.first}</h2>
                                    <h3> Email: {this.props.elemento.email}</h3>
                                    <h4> Fecha de nacimiento: {this.props.elemento.dob.date.substring(0, 10)} ({this.props.elemento.dob.age} años) </h4>  <br/>                                 
                                    <img src={this.props.elemento.picture.large} alt="" className='w-full' />
                                </div>                                
                            </div>
                        </div> 
                        <div className="flip-card-back">
                            <button type="button" className="delete-button -mr-1 flex p-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            onClick = {this.props.onDelete.bind(this, this.props.elemento.id)}>
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <p>Calle y número: {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}</p>
                            <p>Ciudad/Estado: {this.props.elemento.location.city}/{this.props.elemento.location.state} </p>
                            <p>País: {this.props.elemento.location.country}</p>
                            <p>Código postal: {this.props.elemento.location.postcode}</p>
                            <p>Fecha de Registro: {this.props.elemento.registered.date.substring(0, 10)}</p>
                            <p>Teléfono: {this.props.elemento.phone}</p>
                        </div>                       
                    </li>
                </ul>                

              </React.Fragment>       
            )
        }
    }

export default Card;