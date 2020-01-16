import React from 'react'

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/customCard'
import ListFooter from './listFooter'
import ListItem from './listItem'
import './list.css'

export default props => (
    <CustomCard
        containerClass='list-container'
        footer={<ListFooter total={props.total} />}
        link='/list'>
        <div>
            <p className='card-title'>{props.list}</p>
            <div className='list-card-body'>
                <ListItem icon={faShoppingBasket} text='1 item(s) left' />
                <ListItem icon={faCheck} text='2 item(s) bought' />
            </div>
        </div>
    </CustomCard>
)