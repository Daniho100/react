import React from 'react'
import './card.css'

const Card = ({data}) => {
 

    return (
        <div className="container">
            <div className='row'>
  <div className="col " align='center'>

<div className="title">

    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{data.firstName}{" "}{data.lastName}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{data.bank}</p>

    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{data.cardNumber}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{data.valid}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{data.cvs}</p>

    </div>

</div>

</div>
</div>


    )
}

export default Card