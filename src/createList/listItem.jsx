import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import CustomCard from '../common/customCard'
import ListItemFooter from './listItemFooter'

const ListItem = props => (
    <CustomCard
        link='#'
        image={props.item.img}
        containerClass='list-item'
        footer={
            <ListItemFooter
                list={props.list}
                item={props.item}
                deleteProduct={props.deleteProduct}
            />
        }
        action={() => props.toggleProduct(props.item.id)}
    >
        <div>
            <div className='list-item-header'>
                <Typography variant='subtitle1' component='h2'>{props.item.product}</Typography>
                <Checkbox
                    checked={props.item.checked}
                />
            </div>
            <Typography component='p'>{props.item.quantity}</Typography>
            <Typography component='p'>R$ {props.item.price}</Typography>
        </div>
    </CustomCard>
)

export default ListItem