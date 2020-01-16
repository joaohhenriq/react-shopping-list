import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import CustomCard from '../common/customCard'
import ListItemFooter from './listItemFooter'

const ListItem = props => (
    <CustomCard
        link='#'
        image='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555306143/shape/mentalfloss/istock_43355764_small.jpg'
        containerClass='list-item'
        footer={<ListItemFooter item={props.item} deleteProduct={props.deleteProduct} />}>
        <div>
            <div className='list-item-header'>
                <Typography variant='subtitle1' component='h2'>{props.item.product}</Typography>
                <Checkbox />
            </div>
            <Typography component='p'>{props.item.quantity}</Typography>
            <Typography component='p'>R$ {props.item.price}</Typography>
        </div>
    </CustomCard>
)

export default ListItem