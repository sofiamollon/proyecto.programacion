import React from 'react'

    function Card(props){
        return (
        <div className='card'>
            <img src={props.elemento.picture} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <p>{props.elemento.name.last}</p>
                </div>
            </div>            
        </div>
        )
    }

export default Card