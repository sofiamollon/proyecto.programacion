import React from 'react'

    function Card(props){
        return (
        <div className='card'>
            <img src={props.elemento.picture} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h2>{props.elemento.name.last}</h2> 
                    <h2>{props.elemento.name.first}</h2>
                    <h3> {props.elemento.email}</h3>
                    <h4> {props.elemento.dob.date} - ({props.elemento.dob.age})</h4>

                    

                </div>
            </div>            
        </div>
        )
    }

export default Card