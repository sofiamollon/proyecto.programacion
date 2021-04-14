import React, { Component } from "react";

    class Card extends Component{

        render(){
            return (
                <ul class="cards flip-card"> 
                    {/* <li className="cards_item flip-card-inner"> */}
                        <div className='card flip-card-front delete-card' >
                                <button type="button" className="delete-button -mr-1 flex p-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                onClick = {this.props.onDelete.bind(this, this.props.elemento.id)}>
                                    <span className="sr-only">Dismiss</span>
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <img src={this.props.elemento.picture} alt="" className='w-full' />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <h2>Apellido: {this.props.elemento.name.last}</h2> 
                                    <h2> Nombre: {this.props.elemento.name.first}</h2>
                                    <h3> Email: {this.props.elemento.email}</h3>
                                    <h4> Fecha de nacimiento: {this.props.elemento.dob.date} </h4>
                                    <h1>Edad: ({this.props.elemento.dob.age})</h1>  
                                    <button style= {{borderRadius:"40px", width:"11%",marginLeft:"45%",height:"38px"}} type="button" 
                                    className="-mr-1 flex rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                                    <span className="sr-only"></span>
                                        <svg style= {{margin:"0 auto", paddingLeft:"14%"}} xmlns="http://www.w3.org/2000/svg" viewBox="4 0 15 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                        </div> 
                        {/* <div className="flip-card-back">
                            <p>Calle y número: {this.props.elemento.location.street.name} N˚{this.props.elemento.location.street.number}</p>
                            <p>Ciudad/Estado: {this.props.elemento.location.city}/{this.props.elemento.location.state} </p>
                            <p>País: {this.props.elemento.location.country}</p>
                            <p>Código postal: {this.props.elemento.location.postcode}</p>
                            <p>Fecha de Registro: {this.props.elemento.registered.date}</p>
                            <p>Teléfono: {this.props.elemento.phone}</p>
                        </div>  */}
                    {/* </li> */}
                </ul>           
            )
        }
    }

export default Card;