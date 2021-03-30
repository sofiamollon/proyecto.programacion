import React from 'react'

    function Card(props){
        return (
        <div className='card'>
            <img src={props.photo} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Nombre</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum
                </p>
            </div>
        </div>
        )
    }

export default Card