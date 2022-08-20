import React from 'react';
import './DisplayCount.css'

export const CountButton = ({value}) => {
    
    return (
        <div className='dispContainer'>
            <p className='mx-auto my-auto countValue'>{value}</p>
        </div>
        )
}

export default CountButton