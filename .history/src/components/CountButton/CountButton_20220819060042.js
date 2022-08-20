import React from 'react'
import './CountButton.css'

export const CountButton = ({op, func}) => {
    
    return <button className='countBtn' onClick={func}>{op}</button>    

}

export default CountButton