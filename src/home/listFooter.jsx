import React from 'react'

export default props => (
    <div className='list-footer'>
        <p>{props.date}</p>
        <p>{props.total}</p>
    </div>
)