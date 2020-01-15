import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const ListItemFooter = () => (
    <div className='list-item-footer'>
        <div className='list-card-footer-action'>
            <FontAwesomeIcon icon={faPen} color='#2aa4f5' size='1x' />
            <FontAwesomeIcon icon={faTrash} color='#e95c5c' size='1x' />
        </div>
        <p>Total: R$ 50.00</p>
    </div>
)
export default ListItemFooter