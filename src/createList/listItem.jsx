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
        footer={<ListItemFooter />}>
        <div>
            <div className='list-item-header'>
                <Typography variant='subtitle1' component='h2'>Coffee</Typography>
                <Checkbox />
            </div>
            <Typography component='p'>1 un</Typography>
            <Typography component='p'>R$ 10.00</Typography>
        </div>
    </CustomCard>
)

export default ListItem